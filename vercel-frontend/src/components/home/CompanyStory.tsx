import { Link } from "wouter";

const CompanyStory = () => {
  return (
    <section className="py-20 light-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-10 md:mb-0">
            <img 
              src="https://pixabay.com/get/g1feb30238a6c8b85cbbe15f31e5cafad4c9bbc799e6da5c3811604d760b6afbec7f177d2c37e288caa461748162f16168b838d2e1ce4d60e1112e4de67201659_1280.jpg" 
              alt="Daun pisang close-up" 
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="md:pr-12">
              <h6 className="text-secondary uppercase font-bold text-sm mb-2">Cerita Kami</h6>
              <h3 className="text-3xl font-heading font-semibold mb-4">Perjalanan dari Kebun Hijau ke Pasar Global</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Perusahaan kami didirikan pada tahun 2010 dengan visi sederhana: membawa produk alami Indonesia ke pasar dunia. Berawal dari kebun kecil di Jawa Barat, kini kami telah menjadi eksportir terkemuka daun pisang berkualitas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Perjalanan kami tidak selalu mudah, namun komitmen terhadap kualitas dan keberlanjutan membawa kami ke posisi sebagai pemasok tepercaya untuk berbagai industri kuliner dan kerajinan internasional.
              </p>
              <Link href="/about" className="text-primary font-bold hover:underline">
                Pelajari Lebih Lanjut →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
