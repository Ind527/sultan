import SectionTitle from "@/components/shared/SectionTitle";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "fas fa-leaf",
      title: "Ramah Lingkungan",
      description: "100% biodegradable, daun pisang adalah alternatif alami untuk kemasan plastik sekali pakai, membantu mengurangi sampah plastik."
    },
    {
      icon: "fas fa-utensils",
      title: "Meningkatkan Cita Rasa",
      description: "Membungkus makanan dengan daun pisang menambahkan aroma khas dan menjaga kelembapan, meningkatkan rasa hidangan secara alami."
    },
    {
      icon: "fas fa-heart",
      title: "Manfaat Kesehatan",
      description: "Mengandung senyawa alami yang memiliki sifat antiseptik dan antioksidan, cocok untuk penggunaan dalam perawatan tradisional."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Manfaat Daun Pisang"
          subtitle="Daun pisang bukan hanya produk alami yang indah, tetapi juga memiliki banyak manfaat bagi lingkungan dan kesehatan."
        />
        
        <div className="flex flex-wrap">
          {benefits.map((benefit, index) => (
            <div key={index} className="w-full md:w-4/12 px-4 text-center mb-10">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="text-secondary p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 mx-auto rounded-full bg-green-100">
                  <i className={`${benefit.icon} text-3xl`}></i>
                </div>
                <h6 className="text-xl font-semibold font-heading">{benefit.title}</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
