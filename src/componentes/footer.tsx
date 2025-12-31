import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-24 animate-fade">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

        {/* ===== MARCA ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Veridia</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Tienda especializada en zapatillas urbanas y deportivas.
            Calidad, estilo y atención personalizada.
          </p>
        </div>

        {/* ===== CONTACTO ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>

          <a
            href="mailto:contacto@veridia.com"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition mb-3"
          >
            <Mail size={18} />
            contacto@veridia.com
          </a>

          <a
            href="https://www.google.com/maps?q=Colombia"
            target="_blank"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition"
          >
            <MapPin size={18} />
            Colombia
          </a>
        </div>

        {/* ===== REDES ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>

          <div className="flex gap-5">
            <a
              href="https://facebook.com/TU_PAGINA"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <Facebook size={22} />
            </a>

            <a
              href="https://instagram.com/TU_PAGINA"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://tiktok.com/@TU_PAGINA"
              target="_blank"
              className="hover:text-white transition"
            >
              {/* TikTok no está en lucide, usamos SVG */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.5 2h3a5.5 5.5 0 0 0 5.5 5.5v3a8.5 8.5 0 0 1-5.5-2v6.75a6.75 6.75 0 1 1-6.75-6.75c.45 0 .9.05 1.25.15V12a3.75 3.75 0 1 0 2.5 3.55V2Z" />
              </svg>
            </a>

            <a
              href="https://x.com/TU_PAGINA"
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Veridia. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
