interface GoogleMapsProps {
  className?: string;
}

const GoogleMaps = ({ className = "" }: GoogleMapsProps) => {
  return (
    <div className={`bg-gray-200 rounded h-full ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d264.64866428621036!2d106.41589166671677!3d-6.28251473531224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e420505a1bbfdeb%3A0xf1046656984aa8f0!2sSusuku%20Pasanggrahan!5e1!3m2!1sid!2sid!4v1747823000629!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      />
    </div>
  );
};

export default GoogleMaps;