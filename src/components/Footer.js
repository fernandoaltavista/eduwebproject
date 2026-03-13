import Link from "next/link";
import Image from "next/image";
import logo from "./../../public/logo.png";
import {
  FaPhone,
  FaMapMarked,
  FaMailBulk,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export const Footer = () => {
  return (
    // example applying the custom palette via Tailwind
    <footer className="px-3 py-8 bg-brand-orange text-brand-dark transition-colors duration-200">
      <div className="flex flex-col">
        <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
        <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
          <div className="flex flex-col flex-wrap text-sm items-center justify-between flex-1 border-t-gray-950 md:items-end md:border-r md:pr-5">
            <div className="flex flex-row items-center">
              <FaPhone size={25} />
              <Link
                className="ml-2 py-3 px-1 hover:text-brand-beige"
                href="tel:+542324685830"
              >
                +542324685830
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <FaMapMarked size={25} />
              <Link
                href="https://goo.gl/maps/FkK3RhJxjetRXgJj9"
                target="_blank"
              >
                <p className="py-3 px-1 ml-2 text-brand-dark">
                  24 Nro 578, Mercedes Bs As
                </p>
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <FaMailBulk size={25} />
              <Link href="mailto:info@eliaspropiedades.com.ar" target="_blank">
                <p className="py-3 px-1 ml-2 text-brand-dark">
                  info@eliaspropiedades.com.ar
                </p>
              </Link>
            </div>
          </div>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
          <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:pl-5">
            <Link href="/">
              <p className="flex flex-col justify-center items-center">
                <Image
                  src={logo}
                  height={120}
                  width={120}
                  alt="logo"
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                  priority={true}
                  className=""
                />
              </p>
              <div className="flex flex-col justify-center items-center mt-5 p-2 border-t border-t-gray-950">
                <p className="text-xs ">Servicios Inmobiliarios</p>
                <p className="text-xs ">Matricula 4019</p>
              </div>
            </Link>
          </div>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
          <div className="flex items-center justify-center flex-1 mt-4 border-t-gray-950 md:mt-0 md:border-l md:pl-5">
            <Link
              href="https://instagram.com/eliaslopezpropiedades"
              target="_blank"
            >
              <FaInstagram className="mr-1" size={25} />
            </Link>
            <Link
              href="https://www.facebook.com/people/Elias-Lopez-Propiedades/100095155822919/"
              target="_blank"
            >
              <FaFacebookF className="mr-1" size={25} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
