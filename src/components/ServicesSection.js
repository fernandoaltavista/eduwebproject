const ServicesSection = () => {
  return (
    <section className="text-gray-600 bg-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-3xl font-bold text-center mb-10 text-black">
            Nuestros Servicios
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {[
            "Authentic Cliche Forage",
            "Kinfolk Chips Snackwave",
            "Coloring Book Ethical",
            "Typewriter Polaroid Cray",
            "Pack Truffaut Blue",
            "The Catcher In The Rye",
          ].map((text, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="brand-dark w-6 h-6 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{text}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="flex mx-auto mt-16 bg-brand-dark hover:bg-brand-light text-white cursor-pointer font-medium rounded-4xl px-5 py-3">
          Contactanos
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;


