import { useEffect, useState } from "react";

const novedades = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    nombre: "Adidas Street 2025",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    nombre: "Nike Air Max",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    nombre: "Puma Urban",
  },
];

const Novedades = () => {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % novedades.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [pause]);

  return (
    <section id="novedades" className="my-12">
      <h2 className="text-2xl font-semibold mb-6">🔥 Novedades</h2>

      <div
        className="relative overflow-hidden rounded-2xl shadow-lg"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <img
          src={novedades[index].img}
          alt={novedades[index].nombre}
          className="w-full h-[420px] object-cover transition-all duration-700"
        />

        <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4">
          <h3 className="text-lg font-medium">
            {novedades[index].nombre}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Novedades;
