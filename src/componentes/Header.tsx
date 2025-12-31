const Header = () => {
  return (
    <header className="bg-[#0f0f0f] text-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-semibold tracking-wide">
        Veridia
      </h1>

      <nav className="space-x-6 text-sm">
        <a href="#novedades" className="hover:text-white transition">
          Novedades
        </a>
        <a href="#productos" className="hover:text-white transition">
          Productos
        </a>
        <a href="#catalogo-drive" className="hover:text-white transition">
          Catálogo
        </a>
      </nav>
    </header>
  );
};

export default Header;
