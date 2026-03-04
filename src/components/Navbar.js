"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import links from "@/services/links";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebookF, FaPhone } from "react-icons/fa";


export const Navbar = ({ color }) => {
  const [isOpen, setOpen] = useState(false);
  const [navBgColor, setNavBgColor] = useState(false);
  const pathname = usePathname();
  const homePage = pathname === "/";
  const updateState = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };
  const changeNavBg = () => {
    window.scrollY >= 400 ? setNavBgColor(true) : setNavBgColor(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <nav
      className={
        homePage && navBgColor
          ? " from-neutral-950 to-gray-600 nav fixed shadow-xl font-semibold text-black transition duration-1000 ease-out"
          : `${color} nav fixed shadow-xl font-semibold transition duration-1000 ease-out`
      }
    >
      <div className="menu-logo">
        <Link href="/">
          <p className="flex justify-center">
            <Image
              src="/logo.png" // replace with actual logo in public folder
              height={100}
              width={100}
              alt="logo"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              priority={true}
              className="ml-4"
            />
          </p>
        </Link>
      </div>
      <div className="">
        <ul className={isOpen ? "sidebar active text-black" : "sidebar"}>
          {links.map(({ name, href, key }) => (
            <li
              onClick={updateState}
              key={key}
              className="item text-base sm:text-md font-semibold"
            >
              <Link href={href}>{name.toUpperCase()}</Link>
            </li>
          ))}
          <li className="item">
            <Link href="tel:+542324685830">
              <FaPhone className="mr-2 ml-2" size={25} />
            </Link>
            <Link
              href="https://instagram.com/eliaslopezpropiedades"
              target="_blank"
            >
              <FaInstagram className="mr-2 ml-2" size={25} />
            </Link>

            <Link
              href="https://www.facebook.com/people/Elias-Lopez-Propiedades/100095155822919/"
              target="_blank"
            >
              <FaFacebookF className="mr-2 ml-2" size={25} />
            </Link>
          </li>
        </ul>
      </div>

      <div className="menu-mobile">
        <Hamburger toggled={isOpen} toggle={setOpen} color={"#FFFFFF"} />
      </div>
    </nav>
  );
};

// export default to match usage in pages
export default Navbar;
