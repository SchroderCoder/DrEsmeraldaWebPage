import logo from '../../assets/logo/logo1.jpg';

function Header () {
    return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Dra. EsmeraldaCobos</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Inicio</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Servicios</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Contacto</a></li>
        </ul>
      </div>
    </nav>  
    );
};

export default Header;
