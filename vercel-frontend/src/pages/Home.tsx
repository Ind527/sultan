import HeroSection from "@/components/home/HeroSection";
import CompanyStory from "@/components/home/CompanyStory";
import BenefitsSection from "@/components/home/BenefitsSection";
import VisionMission from "@/components/home/VisionMission";
import TestimonialSection from "@/components/home/TestimonialSection";
import SectionTitle from "@/components/shared/SectionTitle";
import GoogleMaps from "@/components/shared/GoogleMaps";
import ContactForm from "@/components/contact/ContactForm";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/utils";
import { Link } from "wouter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CompanyStory />
      <BenefitsSection />
      
      {/* Products Preview Section */}
      <section id="products" className="py-20 light-bg">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Produk Kami"
            subtitle="Berbagai produk daun pisang berkualitas tinggi untuk kebutuhan ekspor."
          />
          
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div key={product.id} className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/products" className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>
      
      <VisionMission />
      <TestimonialSection />
      
      {/* Location Section */}
      <section className="py-20 light-bg">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Lokasi Kami"
            subtitle="Kunjungi kantor dan fasilitas produksi kami atau hubungi kami untuk informasi lebih lanjut."
          />
          
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4 mb-10 lg:mb-0">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">Informasi Kontak</h3>
                
                <div className="flex items-start mb-6">
                  <div className="text-secondary mr-4">
                    <i className="fas fa-map-marker-alt text-2xl"></i>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Alamat</h5>
                    <p className="text-gray-600">
                      Jl. Raya Kebun Daun No. 123<br />
                      Kec. Sukamaju, Kabupaten Bogor<br />
                      Jawa Barat, Indonesia 16810
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="text-secondary mr-4">
                    <i className="fas fa-phone-alt text-2xl"></i>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Telepon</h5>
                    <p className="text-gray-600">
                      +62 812 3456 7890<br />
                      +62 21 8765 4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="text-secondary mr-4">
                    <i className="fas fa-envelope text-2xl"></i>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Email</h5>
                    <p className="text-gray-600">
                      info@eksporpisang.com<br />
                      sales@eksporpisang.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary mr-4">
                    <i className="fas fa-clock text-2xl"></i>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Jam Operasional</h5>
                    <p className="text-gray-600">
                      Senin - Jumat: 08.00 - 17.00<br />
                      Sabtu: 08.00 - 12.00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-8/12 px-4">
              <div className="bg-white p-2 rounded-lg shadow-lg h-full">
                <GoogleMaps className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Preview Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Hubungi Kami"
            subtitle="Butuh informasi lebih lanjut? Kirim pesan dan tim kami akan segera menghubungi Anda."
          />
          
          <div className="flex flex-wrap">
            <div className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <ContactForm />
              </div>
            </div>
            
            <div className="w-full lg:w-7/12 px-4">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">Informasi Penting</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Jam Ekspor</h4>
                  <p className="text-gray-600">Pesanan ekspor diproses setiap hari kerja dari jam 8 pagi hingga 4 sore. Semua pengiriman internasional memerlukan pemesanan minimal 1 minggu sebelumnya.</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Daerah Pengiriman</h4>
                  <p className="text-gray-600">Kami melayani pengiriman ke berbagai negara di Asia, Eropa, dan Amerika Utara. Silakan hubungi tim kami untuk konfirmasi ketersediaan pengiriman ke negara Anda.</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Dokumen Ekspor</h4>
                  <p className="text-gray-600">Kami membantu menyiapkan semua dokumen ekspor yang diperlukan, termasuk sertifikat kesehatan tanaman, sertifikat asal, dan dokumen bea cukai lainnya.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">Kunjungan Pabrik</h4>
                  <p className="text-gray-600">Kami menyambut kunjungan dari calon pelanggan dan mitra bisnis. Silakan atur jadwal minimal 3 hari sebelumnya dengan menghubungi kantor kami.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
