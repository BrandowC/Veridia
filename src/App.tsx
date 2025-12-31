import { useEffect, useState } from "react";
import Header from "./componentes/Header";
import Novedades from "./componentes/Novedades";
import Catalogo from "./componentes/Catalogo";
import Carrito from "./componentes/Carrito";
import Footer from "./componentes/footer";

export type Producto = {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  cantidad: number;
};

function App() {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  /* =========================
     CARGAR CARRITO AL INICIAR
  ========================== */
  useEffect(() => {
    const data = localStorage.getItem("carrito");
    if (data) {
      setCarrito(JSON.parse(data));
    }
  }, []);

  /* =========================
     GUARDAR CARRITO
  ========================== */
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  /* =========================
     AGREGAR PRODUCTO
  ========================== */
  const agregarAlCarrito = (producto: Omit<Producto, "cantidad">) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);

      if (existe) {
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  /* =========================
     AUMENTAR / DISMINUIR
  ========================== */
  const aumentar = (id: number) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  const disminuir = (id: number) => {
    setCarrito((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter((p) => p.cantidad > 0)
    );
  };

  /* =========================
     WHATSAPP
  ========================== */
const enviarWhatsApp = () => {
  if (carrito.length === 0) return;

  const mensaje = carrito
    .map(
      (p) =>
        `👟 ${p.nombre}\nCantidad: ${p.cantidad}\nSubtotal: $${(
          p.precio * p.cantidad
        ).toLocaleString()}\n`
    )
    .join("\n");

  const total = carrito.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0
  );

  const texto = `Hola, quiero hacer el siguiente pedido:\n\n${mensaje}\n🧾 Total: $${total.toLocaleString()}`;

  const numero = "573001234567"; // 👈 TU NÚMERO REAL AQUÍ

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
};


  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <Header />

      {/* CONTENIDO */}
      <main className="max-w-7xl mx-auto px-4">
        <Novedades />

        {/* BOTÓN CATÁLOGO DRIVE */}
        <section id="catalogo-drive" className="my-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            📂 Catálogo completo
          </h2>

          <a
            href="https://drive.google.com/TU_LINK_AQUI"
            target="_blank"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Ver catálogo en Google Drive
          </a>
        </section>

        {/* CATÁLOGO */}
        <Catalogo agregarAlCarrito={agregarAlCarrito} />

        {/* CARRITO */}
        <Carrito
          carrito={carrito}
          aumentar={aumentar}
          disminuir={disminuir}
          enviarWhatsApp={enviarWhatsApp}
        />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
