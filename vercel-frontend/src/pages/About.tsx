import { aboutImages } from "@/lib/utils";
import SectionTitle from "@/components/shared/SectionTitle";
import { Link } from "wouter";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 flex content-center items-center justify-center" style={{ minHeight: "40vh" }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <div 
            className="w-full h-full bg-gradient-to-r from-primary/60 to-secondary/40" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1536746803623-cef87080bfc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
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
                Tentang Kami
              </h1>
              <p className="text-white text-lg">
                Mengenal lebih dekat Ekspor Daun Pisang Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0">
              <h6 className="text-secondary uppercase font-bold text-sm mb-2">Tentang Kami</h6>
              <h3 className="text-4xl font-heading font-bold mb-6">Menghubungkan Petani Lokal dengan Pasar Global</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami adalah eksportir daun pisang terkemuka dari Indonesia yang fokus pada kualitas, keberlanjutan, dan kepuasan pelanggan. Dengan pengalaman lebih dari 10 tahun, kami telah membangun reputasi sebagai pemasok tepercaya untuk berbagai industri di seluruh dunia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tim kami bekerja erat dengan petani lokal untuk memastikan bahwa setiap daun pisang yang kami ekspor memenuhi standar tertinggi. Kami menerapkan praktik pertanian berkelanjutan dan memastikan harga yang adil bagi petani kami.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Inovasi merupakan bagian penting dari bisnis kami, terus mengembangkan metode produksi dan pengemasan untuk memenuhi kebutuhan pelanggan modern.
              </p>
              
              <div className="flex space-x-4">
                <Link href="/contact" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block">
                  Hubungi Kami
                </Link>
                <Link href="/gallery" className="bg-white border-2 border-primary hover:bg-primary hover:text-white text-primary font-bold py-3 px-6 rounded-full transition duration-300 inline-block">
                  Lihat Galeri
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-6/12 p-2">
                  <img 
                    src={aboutImages[0].image} 
                    alt={aboutImages[0].title} 
                    className="rounded-lg shadow-lg mb-4"
                  />
                  <img 
                    src={aboutImages[1].image} 
                    alt={aboutImages[1].title} 
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full sm:w-6/12 p-2 sm:pt-10">
                  <img 
                    src={aboutImages[2].image} 
                    alt={aboutImages[2].title} 
                    className="rounded-lg shadow-lg mb-4"
                  />
                  <img 
                    src={aboutImages[3].image} 
                    alt={aboutImages[3].title} 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision Mission */}
      <section className="py-20 light-bg">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Visi & Misi"
            subtitle="Komitmen kami untuk pertumbuhan berkelanjutan dan pelayanan berkualitas."
          />
          
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-6/12 px-4 mb-10 lg:mb-0">
              <div className="bg-white p-8 rounded-lg shadow relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10">
                  <i className="fas fa-eye text-9xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Visi Kami</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Menjadi eksportir daun pisang terkemuka di Indonesia yang diakui secara global untuk kualitas, keberlanjutan dan inovasi. Kami berkomitmen untuk memperkenalkan keunggulan produk alami Indonesia ke pasar dunia sambil mendukung komunitas lokal dan praktik pertanian berkelanjutan.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li className="mb-2">Menjadi pemimpin pasar ekspor produk daun pisang</li>
                  <li className="mb-2">Mempromosikan alternatif ramah lingkungan untuk plastik</li>
                  <li>Mendukung petani lokal melalui praktik perdagangan yang adil</li>
                </ul>
              </div>
            </div>
            
            <div className="w-full lg:w-6/12 px-4">
              <div className="bg-white p-8 rounded-lg shadow relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10">
                  <i className="fas fa-bullseye text-9xl text-secondary"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-secondary">Misi Kami</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Menyediakan produk daun pisang berkualitas tinggi dengan layanan pelanggan yang unggul sambil memastikan keberlanjutan lingkungan dan manfaat ekonomi bagi masyarakat. Kami berkomitmen untuk terus berinovasi dalam produksi dan penggunaan daun pisang.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li className="mb-2">Menyediakan produk berkualitas dengan standar internasional</li>
                  <li className="mb-2">Mengembangkan metode produksi berkelanjutan</li>
                  <li className="mb-2">Memberikan pelatihan dan dukungan kepada petani lokal</li>
                  <li>Melakukan inovasi berkelanjutan untuk produk dan kemasan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Tim Kami"
            subtitle="Mengenal para profesional di balik kesuksesan Ekspor Daun Pisang Indonesia."
          />
          
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" 
                      alt="CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-heading font-semibold mb-1">Ahmad Wijaya</h4>
                  <p className="text-gray-500 mb-4">CEO & Founder</p>
                  <p className="text-gray-600 mb-4">
                    Memiliki pengalaman lebih dari 15 tahun dalam bisnis ekspor produk pertanian.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" 
                      alt="Operations Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-heading font-semibold mb-1">Siti Rahayu</h4>
                  <p className="text-gray-500 mb-4">Operations Director</p>
                  <p className="text-gray-600 mb-4">
                    Ahli dalam pengelolaan rantai pasok dan optimalisasi produksi.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" 
                      alt="Export Manager" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-heading font-semibold mb-1">Budi Santoso</h4>
                  <p className="text-gray-500 mb-4">Export Manager</p>
                  <p className="text-gray-600 mb-4">
                    Spesialis dalam regulasi ekspor internasional dan logistik.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" 
                      alt="Quality Control" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-heading font-semibold mb-1">Rudi Hartono</h4>
                  <p className="text-gray-500 mb-4">Quality Control Manager</p>
                  <p className="text-gray-600 mb-4">
                    Memastikan semua produk memenuhi standar kualitas internasional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
