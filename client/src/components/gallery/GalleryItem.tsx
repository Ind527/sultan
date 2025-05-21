interface GalleryItemProps {
  id: number;
  category: string;
  title: string;
  image: string;
  visible: boolean;
}

const GalleryItem = ({ id, category, title, image, visible }: GalleryItemProps) => {
  return (
    <div 
      className={`w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-2 gallery-item ${visible ? 'block' : 'hidden'}`} 
      data-category={category}
    >
      <a href="#" className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </a>
    </div>
  );
};

export default GalleryItem;
