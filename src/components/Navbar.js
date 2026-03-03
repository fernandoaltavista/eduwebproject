export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-800">
          Edu Web
        </a>
        <div className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Inicio
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Cursos
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}