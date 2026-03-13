import Carousel from "./Carousel";

const Service = () => {
  return (
     <div className="mt-20 bg-base-200 ">
          <div className="flex md:flex-row justify-center items-center gap-10 md:px-10 md:py-20 flex-col">
            <div className="w-1/2 lg:w-full">
              <h1 className="text-5xl font-bold">Que hacemos</h1>
              <p className="md:py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
              </p>
              <div className="flex gap-4">
                <button className="bg-brand-dark text-white cursor-pointer font-medium rounded-4xl px-5 py-3 hover:bg-brand-light hover:text-brand-dark transition-all duration-300 hover:scale-105 hero-button-1">
                  Contactanos
                </button>
              </div>
            </div>
    
            <div className="flex w-1/2 justify-center lg:w-full">
              <Carousel />
            </div>
          </div>
        </div>)};

export default Service;