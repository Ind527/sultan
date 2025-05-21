interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true 
}: SectionTitleProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-16`}>
      <h2 className="text-4xl font-heading font-bold text-gray-800 mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-xl text-gray-600 ${centered ? 'max-w-2xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
