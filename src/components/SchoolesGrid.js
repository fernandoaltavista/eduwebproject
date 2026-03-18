import schoolesList from "../services/schoolesList.json";
import Image from "next/image";
import logo from "../../public/logo.png";

const SchoolesGrid = () => {
  return (
    <div className="bg-base-200 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Nuestros Colegios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
        {schoolesList.map(({ key, name, description, image, link }) => {
          const cardClasses =
            "bg-white rounded-lg shadow-md overflow-hidden text-center p-4 flex flex-col items-center justify-center";

          const cardContent = (
            <>
              <div className="flex justify-center w-full">
                <Image
                  src={image ?? logo}
                  alt={`${name} logo`}
                  width={90}
                  height={85}
                  className="mb-3 rounded"
                />
              </div>
              <p className="text-gray-500 p-2 text-center">{description}</p>
              <h3 className="text-xl font-semibold mb-2 p-3 text-center">{name}</h3>
            </>
          );

          return link ? (
            <a
              key={key}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full ${cardClasses}`}
            >
              {cardContent}
            </a>
          ) : (
            <div key={key} className={cardClasses}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SchoolesGrid;
