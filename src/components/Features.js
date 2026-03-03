import FeatureCard from './FeatureCard';

const items = [
  {
    title: 'Aprendizaje a tu ritmo',
    description: 'Selecciona el horario que mejor se adapte a ti y aprende desde cualquier lugar.',
  },
  {
    title: 'Instructores expertos',
    description: 'Nuestros profesores tienen años de experiencia en la industria.',
  },
  {
    title: 'Comunidad activa',
    description: 'Únete a una comunidad de estudiantes comprometidos y colabora en proyectos.',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
        {items.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}