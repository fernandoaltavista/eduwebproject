"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation({ language, setLanguage, t }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const homePage = pathname === "/";

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  const closeMenu = () => setIsMenuOpen(false);
  const handleLinkClick = () => closeMenu();

  useEffect(() => {
    const SCROLL_THRESHOLD = 100; // ajusta según prefieras
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isTransparent = homePage && !isScrolled && !isMenuOpen;

  const navBase =
    "fixed top-0 left-0 w-full z-40 transition-colors duration-500 ease-out";
  const navClasses = isTransparent
    ? `${navBase} bg-transparent text-white`
    : `${navBase} bg-white text-gray-900 shadow`;

  const desktopLinkClass = isTransparent
    ? "text-white hover:text-teal-600"
    : "text-gray-900 hover:text-teal-700";

  const hamburgerBarColor = isTransparent ? "bg-white" : "bg-gray-900";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Image
            src="/logo-transparent.png"
            alt="logo"
            width={52}
            height={52}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#inicio"
            onClick={handleLinkClick}
            className={`transition-colors ${desktopLinkClass}`}
          >
            {t.nav.inicio}
          </a>
          <a
            href="#servicios"
            onClick={handleLinkClick}
            className={`transition-colors ${desktopLinkClass}`}
          >
            {t.nav.servicios}
          </a>
          <a
            href="#nosotros"
            onClick={handleLinkClick}
            className={`transition-colors ${desktopLinkClass}`}
          >
            {t.nav.nosotros}
          </a>
          <a
            href="#galeria"
            onClick={handleLinkClick}
            className={`transition-colors ${desktopLinkClass}`}
          >
            {t.nav.galeria}
          </a>
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className={`transition-colors ${desktopLinkClass}`}
          >
            {t.nav.contacto}
          </a>
          <a
            href="#faq"
            onClick={handleLinkClick}
            className={`transition-colors ${desktopLinkClass}`}
          >
            {t.nav.faq}
          </a>

          <a
            href="https://www.instagram.com/tras.ladosariel/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${desktopLinkClass}`}
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={`rounded px-2 py-1 text-sm ${
              isTransparent
                ? "border border-white/40 text-white bg-transparent"
                : "border border-gray-300 text-gray-900 bg-white"
            }`}
          >
            <option value="es">🇪🇸 ES</option>
            <option value="en">🇺🇸 EN</option>
            <option value="pt">🇧🇷 PT</option>
          </select>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-60 relative"
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <>
              <span
                className={`block w-6 h-0.5 rounded transition-all ${hamburgerBarColor}`}
              ></span>
              <span
                className={`block w-6 h-0.5 rounded transition-all ${hamburgerBarColor}`}
              ></span>
              <span
                className={`block w-6 h-0.5 rounded transition-all ${hamburgerBarColor}`}
              ></span>
            </>
          ) : (
            <div className="relative w-6 h-6">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          )}
        </button>
      </div>

      {/* Mobile menu - Full screen overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: isMenuOpen ? 0 : "-100%" }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 py-20">
          <nav className="w-full max-w-sm space-y-2">
            <a
              href="#inicio"
              onClick={handleLinkClick}
              className="block text-center text-gray-900 py-4 px-6 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-50 hover:text-teal-700 hover:scale-105 active:scale-100"
            >
              {t.nav.inicio}
            </a>
            <a
              href="#servicios"
              onClick={handleLinkClick}
              className="block text-center text-gray-900 py-4 px-6 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-50 hover:text-teal-700 hover:scale-105 active:scale-100"
            >
              {t.nav.servicios}
            </a>
            <a
              href="#nosotros"
              onClick={handleLinkClick}
              className="block text-center text-gray-900 py-4 px-6 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-50 hover:text-teal-700 hover:scale-105 active:scale-100"
            >
              {t.nav.nosotros}
            </a>
            <a
              href="#galeria"
              onClick={handleLinkClick}
              className="block text-center text-gray-900 py-4 px-6 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-50 hover:text-teal-700 hover:scale-105 active:scale-100"
            >
              {t.nav.galeria}
            </a>
            <a
              href="#contacto"
              onClick={handleLinkClick}
              className="block text-center text-gray-900 py-4 px-6 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-50 hover:text-teal-700 hover:scale-105 active:scale-100"
            >
              {t.nav.contacto}
            </a>
            <a
              href="#faq"
              onClick={handleLinkClick}
              className="block text-center text-gray-900 py-4 px-6 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-50 hover:text-teal-700 hover:scale-105 active:scale-100"
            >
              {t.nav.faq}
            </a>

            <a
              href="https://www.instagram.com/transfer_iguazu_ae/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 text-gray-900 py-4 px-6 text-xl font-medium rounded-lg transition-all duration-200 hover:bg-teal-50 hover:text-teal-700 hover:scale-105 active:scale-100"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <div className="pt-6 mt-6 border-t border-gray-200">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
              >
                <option value="es">🇪🇸 ES</option>
                <option value="en">🇺🇸 EN</option>
                <option value="pt">🇧🇷 PT</option>
              </select>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}

