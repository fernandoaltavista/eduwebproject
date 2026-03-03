import WhatsAppIcon from "./WhatsAppIcon";
import { Calendar, Clock } from "lucide-react";

export default function Contact({ t, language, formData, setFormData, handleSubmit }) {
  // Mensaje predeterminado que se enviará por WhatsApp
  const defaultMessage =
    t?.contact?.whatsappMessage ||
    "¡Hola! 👋 Contácto desde el sitio web de Transfer Iguazú A&E. Me gustaría recibir más información sobre sus servicios, por favor. 📩";

  // Codificar el mensaje para la URL de WhatsApp
  const encodedMessage = encodeURIComponent(defaultMessage);

  // URL de WhatsApp con el mensaje predeterminado
  const whatsappUrl = `https://wa.me/+5493757624576?text=${encodedMessage}`;

  const getDestinationOptions = () => {
    const baseOptions = [
      { value: "Aeropuerto", label: t.services.airport.title },
      {
        value: "Cataratas Argentinas",
        label:
          language === "es"
            ? "Cataratas Argentinas"
            : language === "en"
            ? "Argentine Falls"
            : "Cataratas Argentinas",
      },
      {
        value: "Cataratas Brasileñas",
        label:
          language === "es"
            ? "Cataratas Brasileñas"
            : language === "en"
            ? "Brazilian Falls"
            : "Cataratas Brasileiras",
      },
      { value: "Ciudad del Este", label: t.services.ciudadEste.title },
      { value: "Foz de Iguazú", label: t.services.foz.title },
      { value: "City Tour", label: t.services.cityTour.title },
      {
        value: "Otro",
        label:
          language === "es" ? "Otro" : language === "en" ? "Other" : "Outro",
      },
    ];
    return baseOptions;
  };

  return (
    <section
      id="contacto"
      className="py-20 px-4 text-white"
      style={{ background: `linear-gradient(to right, #027c68, #003333)` }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          {t.contact.title}
        </h2>
        <p className="text-xl mb-8 text-white/90 text-center">
          {t.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6">
              {language === "es"
                ? "Formulario de Contacto"
                : language === "en"
                ? "Contact Form"
                : "Formulário de Contato"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ "--tw-ring-color": "#027c68" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#027c68")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#d1d5db")
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ "--tw-ring-color": "#027c68" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#027c68")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#d1d5db")
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t.contact.form.phone} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+5493757624576"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ "--tw-ring-color": "#027c68" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#027c68")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#d1d5db")
                  }
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Fecha */}
                <div className="relative">
                  <label className="block text-sm font-semibold mb-2">
                    {t.contact.form.date} *
                  </label>

                  <Calendar
                    className="absolute left-3 top-[50%] translate-y-1 text-gray-500 pointer-events-none"
                    size={20}
                  />

                  <input
                    type="date"
                    required
                    value={formData.date}
                    onClick={(e) =>
                      e.currentTarget.showPicker && e.currentTarget.showPicker()
                    }
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="lg:w-full pl-10 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent md:w-1/2"
                    style={{ "--tw-ring-color": "#027c68" }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#027c68")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#d1d5db")
                    }
                  />
                </div>

                {/* Hora */}
                <div className="relative">
                  <label className="block text-sm font-semibold mb-2">
                    {t.contact.form.time} *
                  </label>

                  <Clock
                    className="absolute left-3 top-[50%] translate-y-1 text-gray-500 pointer-events-none"
                    size={20}
                  />

                  <input
                    type="time"
                    required
                    value={formData.time}
                    onClick={(e) =>
                      e.currentTarget.showPicker && e.currentTarget.showPicker()
                    }
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="lg:w-full pl-10 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent md:w-1/2"
                    style={{ "--tw-ring-color": "#027c68" }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#027c68")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#d1d5db")
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t.contact.form.pickup} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.pickup}
                  onChange={(e) =>
                    setFormData({ ...formData, pickup: e.target.value })
                  }
                  placeholder={
                    language === "es"
                      ? "Ej: Aeropuerto, Hotel X, etc."
                      : language === "en"
                      ? "Ex: Airport, Hotel X, etc."
                      : "Ex: Aeroporto, Hotel X, etc."
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ "--tw-ring-color": "#027c68" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#027c68")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#d1d5db")
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t.contact.form.destination} *
                </label>
                <select
                  required
                  value={formData.destination}
                  onChange={(e) =>
                    setFormData({ ...formData, destination: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ "--tw-ring-color": "#027c68" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#027c68")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#d1d5db")
                  }
                >
                  <option value="">
                    {language === "es"
                      ? "Seleccionar destino"
                      : language === "en"
                      ? "Select destination"
                      : "Selecionar destino"}
                  </option>
                  {getDestinationOptions().map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ "--tw-ring-color": "#027c68" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#027c68")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#d1d5db")
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full text-white font-bold py-3 px-6 rounded-lg transition-all"
                style={{ backgroundColor: "#027c68" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#003333")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#027c68")
                }
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                {language === "es"
                  ? "Información de Contacto"
                  : language === "en"
                  ? "Contact Information"
                  : "Informações de Contato"}
              </h3>
              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg hover:text-green-300 transition-colors"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">
                      {t.contact.info.whatsapp}
                    </div>
                    <div className="text-sm">+5493757624576</div>
                  </div>
                </a>
                <a
                  href="tel:+5493757624576"
                  className="flex items-center gap-3 text-lg transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#b0e892")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-semibold">{t.contact.info.phone}</div>
                    <div className="text-sm">+5493757624576</div>
                  </div>
                </a>
                <a
                  href="mailto:arielramirezz18@gmail.com"
                  className="flex items-center gap-3 text-lg transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#b0e892")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-semibold">{t.contact.info.email}</div>
                    <div className="text-sm">arielramirezz18@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <div className="font-semibold">{t.contact.info.hours}</div>
                    <div className="text-sm">{t.contact.info.hoursValue}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                {language === "es"
                  ? "Zona de Cobertura"
                  : language === "en"
                  ? "Coverage Area"
                  : "Área de Cobertura"}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  ✓{" "}
                  {language === "es"
                    ? "Aeropuerto Internacional de Iguazú"
                    : language === "en"
                    ? "Iguazú International Airport"
                    : "Aeroporto Internacional de Iguazú"}
                </li>
                <li>
                  ✓{" "}
                  {language === "es"
                    ? "Cataratas del Iguazú (Arg. y Bra.)"
                    : language === "en"
                    ? "Iguazú Falls (Arg. & Bra.)"
                    : "Cataratas do Iguaçu (Arg. e Bra.)"}
                </li>
                <li>
                  ✓{" "}
                  {language === "es"
                    ? "Puerto Iguazú"
                    : language === "en"
                    ? "Puerto Iguazú"
                    : "Puerto Iguazú"}
                </li>
                <li>
                  ✓{" "}
                  {language === "es"
                    ? "Foz de Iguazú (Brasil)"
                    : language === "en"
                    ? "Foz do Iguaçu (Brazil)"
                    : "Foz do Iguaçu (Brasil)"}
                </li>
                <li>
                  ✓{" "}
                  {language === "es"
                    ? "Ciudad del Este (Paraguay)"
                    : language === "en"
                    ? "Ciudad del Este (Paraguay)"
                    : "Ciudad del Este (Paraguai)"}
                </li>
                <li>
                  ✓{" "}
                  {language === "es"
                    ? "Hoteles y alojamientos"
                    : language === "en"
                    ? "Hotels and accommodations"
                    : "Hotéis e acomodações"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

