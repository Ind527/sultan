import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12 px-4 mb-8">
            <h3 className="text-xl font-bold mb-4">
              Ekspor Daun Pisang Indonesia
            </h3>
            <p className="text-gray-400 mb-4">
              Perusahaan ekspor daun pisang terkemuka dari Indonesia yang fokus
              pada kualitas, keberlanjutan, dan kepuasan pelanggan.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>

          <div className="w-full md:w-3/12 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Halaman Utama</h4>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Beranda
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  Produk Kami
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/gallery" className="text-gray-400 hover:text-white transition">
                  Galeri
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-3/12 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul>
              <li className="mb-2 flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1 text-secondary"></i>
                <span className="text-gray-400">
                  Jl. Raya Cisoka, RT./RW:/RW.02/01, Pasanggrahan, Kec. Cisoka,
                  Kabupaten Tangerang, Banten 15730
                </span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-phone-alt mr-2 mt-1 text-secondary"></i>
                <span className="text-gray-400">+62 85183272451</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-envelope mr-2 mt-1 text-secondary"></i>
                <span className="text-gray-400">
                  indogreenexport.id@gmail.com
                </span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-2/12 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Kebijakan Pengiriman
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ekspor Daun Pisang Indonesia.
            Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
