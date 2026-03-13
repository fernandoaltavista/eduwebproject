import schoolesList from "../services/schoolesList.json";
import Image from "next/image";
import logo from "../../public/logo.png";

const SchoolesGrid = () => {
  return (
    <div className="bg-base-200 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Nuestros Colegios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
        {schoolesList.map(({ key, name, description }) => (
          <div
            key={key}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4 flex flex-col items-center justify-center"
          >
            <Image src={logo} alt="example" width={30} height={30} />
            
              <h3 className="text-xl font-semibold mb-2 p-3">{name}</h3>
              <p className="text-gray-600 p-2">{description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolesGrid;
