type Props = {
  carrito: any[];
  aumentar: (id: number) => void;
  disminuir: (id: number) => void;
  enviarWhatsApp: () => void;
};

const Carrito = ({
  carrito,
  aumentar,
  disminuir,
  enviarWhatsApp,
}: Props) => {
  if (carrito.length === 0) return null;

  const total = carrito.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0
  );

  return (
    <section className="my-16 bg-white rounded-2xl shadow-lg p-6 animate-fade">
      <h2 className="text-2xl font-semibold mb-6">
        🛒 Tu carrito
      </h2>

      {carrito.map((p) => (
        <div
          key={p.id}
          className="flex items-center gap-4 border-b py-4"
        >
          <img
            src={p.img}
            className="w-20 h-20 object-cover rounded-xl"
          />

          <div className="flex-1">
            <h3 className="font-medium">{p.nombre}</h3>
            <p className="text-gray-500">
              ${p.precio.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => disminuir(p.id)}
              className="px-3 py-1 border rounded-lg"
            >
              −
            </button>

            <span className="font-medium">{p.cantidad}</span>

            <button
              onClick={() => aumentar(p.id)}
              className="px-3 py-1 border rounded-lg"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* TOTAL */}
      <div className="flex justify-between items-center mt-8">
        <span className="text-xl font-semibold">
          Total: ${total.toLocaleString()}
        </span>

        <button
          onClick={enviarWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
        >
          Comprar por WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Carrito;
