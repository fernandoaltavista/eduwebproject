import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppButton({ t }) {
  // Mensaje predeterminado que se enviará por WhatsApp
  const defaultMessage =
    t?.contact?.whatsappMessage ||
    "¡Hola! 👋 Contácto desde el sitio web de EduWeb. Me gustaría recibir más información sobre sus servicios, por favor. 📩";

  // Codificar el mensaje para la URL de WhatsApp
  const encodedMessage = encodeURIComponent(defaultMessage);

  // URL de WhatsApp con el mensaje predeterminado
  const whatsappUrl = `https://wa.me/+5492324522729?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 flex items-center gap-2 animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="hidden sm:inline font-semibold">WhatsApp</span>
    </a>
  );
}

