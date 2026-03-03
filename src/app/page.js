import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  const heroData = {
    title: "Bienvenido a Edu Web",
    subtitle: "Aprende algo nuevo cada día",
    imageSrc: "/hero.jpg", // coloca tu imagen en la carpeta public
    imageAlt: "Fondo educativo",
  };

  return (
    <>
      <Navbar />
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <MainContent>
        <p className="text-red-800 text-center ">
          Aquí puedes añadir más secciones o contenido principal de la página.
        </p>
      </MainContent>
      <Features />
      <Footer />
    </>
  );
}
