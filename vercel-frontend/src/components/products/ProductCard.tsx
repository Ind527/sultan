import { Link } from "wouter";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ProductCard = ({ id, name, description, image }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src={image} 
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-heading font-semibold mb-2">{name}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href="/contact" className="text-primary font-bold hover:text-secondary transition">
          Hubungi Untuk Informasi →
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
