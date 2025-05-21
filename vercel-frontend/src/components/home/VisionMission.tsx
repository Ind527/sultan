import SectionTitle from "@/components/shared/SectionTitle";

const VisionMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Visi & Misi"
          subtitle="Komitmen kami untuk pertumbuhan berkelanjutan dan pelayanan berkualitas."
        />
        
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-6/12 px-4 mb-10 lg:mb-0">
            <div className="light-bg p-8 rounded-lg shadow relative overflow-hidden">
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
            <div className="light-bg p-8 rounded-lg shadow relative overflow-hidden">
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
  );
};

export default VisionMission;
