import "@fortawesome/fontawesome-free/css/all.min.css";

const WhatsAppButton = () => {
  const phoneNumber = "6285183272451";

  return (
    <a
      href={`https://wa.me/6285183272451`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;
