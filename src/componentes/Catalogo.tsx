
type Producto = {
  id: number;
  nombre: string;
  precio: number;
  img: string;
};

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Adidas Run",
    precio: 250000,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    nombre: "Nike Air Max",
    precio: 300000,
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
  },
];

type Props = {
  agregarAlCarrito: (producto: Producto) => void;
};

const Catalogo = ({ agregarAlCarrito }: Props) => {
  return (
    <section id="productos" className="my-14">
      <h2 className="text-2xl font-semibold mb-6">🛒 Productos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {productos.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition"
          >
            <img
              src={p.img}
              alt={p.nombre}
              className="w-full h-64 object-cover rounded-t-2xl"
            />

            <div className="p-4">
              <h3 className="font-medium text-lg">{p.nombre}</h3>
              <p className="text-gray-600 mb-4">
                ${p.precio.toLocaleString()}
              </p>

              <button
                onClick={() => agregarAlCarrito(p)}
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalogo;
