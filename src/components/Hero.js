import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime';
import Image from 'next/image';

export default function Hero({
  title = 'Welcome',
  subtitle = '',
  imageSrc,
  imageAlt = 'Hero image',
}) {
  return (
    <div className="mt-20 bg-base-200 ">
      <div className="flex md:flex-row justify-center items-center gap-10 md:px-10 md:py-20 flex-col">
        <div className="w-1/2 lg:w-full">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="md:py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-4">
            <button className="bg-brand-dark hover:bg-brand-light text-white cursor-pointer font-medium rounded-4xl px-5 py-3">
              Contactanos
            </button>

            <button className="bg-brand-light hover:bg-brand-dark text-brand-dark cursor-pointer font-medium rounded-4xl px-5 py-3">
              Acceso a Colegios
            </button>
          </div>
        </div>

        <div className="flex w-1/2 justify-center lg:w-full">
          <Image
            src={imageSrc}
            className="max-w-sm rounded-lg shadow-2xl"
            alt={imageAlt}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
