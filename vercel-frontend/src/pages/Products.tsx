import { products } from "@/lib/utils";
import ProductCard from "@/components/products/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { Link } from "wouter";

const Products = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 flex content-center items-center justify-center" style={{ minHeight: "40vh" }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <div 
            className="w-full h-full bg-gradient-to-r from-primary/60 to-secondary/40" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </div>
        
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full text-center">
              <h1 className="text-white font-heading font-bold text-4xl md:text-5xl mb-6">
                Produk Kami
              </h1>
              <p className="text-white text-lg">
                Daun pisang berkualitas tinggi untuk berbagai kebutuhan
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Produk Unggulan"
            subtitle="Kami menyediakan berbagai jenis daun pisang berkualitas tinggi untuk kebutuhan ekspor Anda."
          />
          
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div key={product.id} className="w-full md:w-6/12 lg:w-4/12 px-4 mb-8">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Products Information */}
      <section className="py-20 light-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-6/12 px-4 order-2 lg:order-1">
              <div className="md:pr-12">
                <h6 className="text-secondary uppercase font-bold text-sm mb-2">Kualitas Terbaik</h6>
                <h3 className="text-3xl font-heading font-semibold mb-4">Standar Kualitas Internasional</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Semua produk daun pisang kami melewati proses seleksi ketat untuk memastikan kualitas terbaik. Kami memiliki sertifikasi internasional dan mematuhi standar keamanan pangan dan kebersihan.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li className="mb-2">100% organik dan bebas pestisida</li>
                  <li className="mb-2">Dipanen pada waktu optimal untuk menjaga kualitas</li>
                  <li className="mb-2">Pengemasan khusus untuk menjaga kesegaran</li>
                  <li>Tersedia dalam berbagai ukuran dan bentuk</li>
                </ul>
                <Link href="/contact" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block">
                  Minta Penawaran
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 mb-10 lg:mb-0 order-1 lg:order-2">
              <img 
                src="https://pixabay.com/get/g5cbceebbea108bb284b981652eee2923e9872384abd49b04785978a18988e7e08a57842a48dfe5b86d8e406c0b920533b167edd15cf6bf3976866d61be98f83c_1280.jpg" 
                alt="Daun pisang kualitas premium" 
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Orders */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Pesanan Kustom"
            subtitle="Kami juga menerima pesanan khusus sesuai kebutuhan bisnis Anda."
          />
          
          <div className="max-w-4xl mx-auto bg-light p-8 rounded-lg shadow-lg">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-6/12 mb-6 md:mb-0">
                <h4 className="text-xl font-heading font-bold mb-4 text-primary">Layanan Kustom Kami</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Ukuran dan bentuk daun sesuai kebutuhan</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Kemasan khusus dengan label kustom</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Produk turunan daun pisang</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Volume pesanan fleksibel</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 md:pl-8">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Pesanan kustom daun pisang" 
                    className="inline-block rounded-lg shadow max-w-full"
                  />
                  <Link href="/contact" className="mt-6 inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-full transition duration-300">
                    Diskusikan Kebutuhan Anda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
