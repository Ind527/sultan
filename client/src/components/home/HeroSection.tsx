import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]">
      <div className="absolute top-0 w-full h-full bg-center bg-cover">
        <div 
          className="w-full h-full bg-gradient-to-r from-primary/50 to-secondary/40" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </div>
      
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <h1 className="text-white font-heading font-bold text-4xl md:text-5xl mb-6">
              Selamat Datang di Ekspor Daun Pisang Indonesia
            </h1>
            <p className="text-white text-lg mb-12">
              Menyediakan daun pisang berkualitas tinggi untuk kebutuhan global dengan standar kualitas internasional.
            </p>
            <Link href="/contact" className="bg-white text-primary hover:bg-primary hover:text-white transition duration-300 font-bold px-6 py-4 rounded-full shadow-lg text-sm uppercase inline-block">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute left-5 bottom-0 w-20 h-24 opacity-50 leaf-animation hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full object-contain object-bottom text-green-400">
          <path fill="currentColor" d="M34.5,-46.1C46.1,-34.5,58.1,-24.7,61.6,-12.4C65.1,-0.1,60.2,14.6,51.3,24.7C42.4,34.8,29.5,40.3,15.7,45.7C1.9,51.1,-12.8,56.5,-22.8,51.7C-32.8,46.9,-38.1,31.8,-42.4,17.7C-46.8,3.6,-50.2,-9.5,-47.1,-22.2C-44,-34.9,-34.3,-47.2,-22.1,-58.6C-9.9,-70.1,4.8,-80.8,16.5,-77C28.3,-73.3,23,-57.7,34.5,-46.1Z" />
        </svg>
      </div>
      
      <div className="absolute right-10 bottom-10 w-16 h-20 opacity-70 leaf-animation-reverse hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full object-contain object-center text-green-300">
          <path fill="currentColor" d="M37.9,-53.2C51.1,-44,65.2,-35,71.7,-21.8C78.3,-8.6,77.3,8.9,71.1,24.4C64.8,39.8,53.3,53.3,39.2,60.8C25.1,68.3,8.4,69.9,-5.4,66.6C-19.2,63.3,-30.1,55.2,-43.5,46.3C-56.9,37.4,-72.9,27.7,-77.2,14.2C-81.6,0.7,-74.3,-16.5,-64.2,-29.5C-54,-42.5,-41,-51.4,-27.8,-60.4C-14.6,-69.4,-1.4,-78.5,7.8,-75.1C17,-71.6,24.8,-62.5,37.9,-53.2Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
