import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import SchoolesGrid from "@/components/SchoolesGrid";
import Features from "@/components/Features";
import ServicesSection from "@/components/ServicesSection";
import Carousel from "@/components/Carousel";
import Service from "@/components/Service";

export default function Home() {
  const heroData = {
    title: "Bienvenido a Edu Web",
    subtitle: "Aprende algo nuevo cada día",
    imageSrc: "/hero-2.jpg", // coloca tu imagen en la carpeta public
    imageAlt: "Fondo educativo",
  };

  return (
    <>

      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <MainContent>
       <ServicesSection />
      </MainContent>
      <Service />
      <SchoolesGrid />
      <Features />

    </>
  );
}
