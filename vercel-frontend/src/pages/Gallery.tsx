import { useState } from "react";
import { galleryImages } from "@/lib/utils";
import SectionTitle from "@/components/shared/SectionTitle";
import GalleryItem from "@/components/gallery/GalleryItem";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 flex content-center items-center justify-center" style={{ minHeight: "40vh" }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <div 
            className="w-full h-full bg-gradient-to-r from-primary/60 to-secondary/40" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1599933190257-ade62d308472?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
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
                Galeri
              </h1>
              <p className="text-white text-lg">
                Melihat lebih dekat operasi kami dari kebun, gudang, hingga produk jadi
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Galeri Foto"
            subtitle="Temukan berbagai foto dari perkebunan, gudang, dan produk kami."
          />
          
          <div className="flex flex-wrap mb-8">
            <div className="w-full text-center">
              <div className="flex flex-wrap justify-center mb-4">
                <button 
                  className={`mx-2 mb-2 py-2 px-4 rounded-full font-bold transition duration-300 ${
                    activeFilter === "all" 
                      ? "bg-primary text-white" 
                      : "bg-white text-gray-700 hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => handleFilterClick("all")}
                >
                  Semua
                </button>
                <button 
                  className={`mx-2 mb-2 py-2 px-4 rounded-full font-bold transition duration-300 ${
                    activeFilter === "plantation" 
                      ? "bg-primary text-white" 
                      : "bg-white text-gray-700 hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => handleFilterClick("plantation")}
                >
                  Kebun
                </button>
                <button 
                  className={`mx-2 mb-2 py-2 px-4 rounded-full font-bold transition duration-300 ${
                    activeFilter === "warehouse" 
                      ? "bg-primary text-white" 
                      : "bg-white text-gray-700 hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => handleFilterClick("warehouse")}
                >
                  Gudang
                </button>
                <button 
                  className={`mx-2 mb-2 py-2 px-4 rounded-full font-bold transition duration-300 ${
                    activeFilter === "products" 
                      ? "bg-primary text-white" 
                      : "bg-white text-gray-700 hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => handleFilterClick("products")}
                >
                  Produk
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap">
            {galleryImages.map((image) => (
              <GalleryItem 
                key={image.id} 
                {...image} 
                visible={activeFilter === "all" || activeFilter === image.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Showcase */}
      <section className="py-20 light-bg">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Video Proses Produksi"
            subtitle="Lihat bagaimana kami mengelola perkebunan dan memproses daun pisang untuk ekspor."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="relative pt-[56.25%] bg-gray-200 rounded">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <i className="fas fa-video text-gray-400 text-6xl mb-4"></i>
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">Video Showcase</h4>
                    <p className="text-gray-500 mb-4">Tambahkan video proses produksi Anda di sini.</p>
                    <p className="text-sm text-gray-500">
                      <code className="text-xs bg-gray-100 p-1 rounded">
                        &lt;iframe src="https://www.youtube.com/embed/..." width="100%" height="100%" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;
                      </code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
