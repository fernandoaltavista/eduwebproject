import Image from 'next/image';

export default function Hero({
  title = 'Welcome',
  subtitle = '',
  imageSrc,
  imageAlt = 'Hero image',
}) {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-white text-center overflow-hidden bg-blue-500">
      {imageSrc && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-xl md:text-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
