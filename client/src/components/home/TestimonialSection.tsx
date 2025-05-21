import { useState, useEffect } from "react";
import { testimonials } from "@/lib/utils";
import SectionTitle from "@/components/shared/SectionTitle";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Testimoni Pelanggan"
          subtitle="Apa kata pelanggan kami tentang produk dan layanan kami."
        />
        
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0 hidden'}`}
            >
              <div className="max-w-4xl mx-auto px-8 py-10 light-bg rounded-xl shadow-lg relative">
                <div className="text-primary text-6xl absolute top-6 left-10 opacity-20">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <img 
                      src={testimonial.image} 
                      alt={`Foto ${testimonial.name}`} 
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <i className="fas fa-star-half-alt"></i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`mx-1 w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300 hover:bg-primary'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
