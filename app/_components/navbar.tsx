export default function Navbar() {
  return (
    <nav>
      <ul className="text-xl flex min-w-full justify-end pr-8 text-[#dde6ed] font-semibold bg-[#003058] *:hover:bg-[#00456f] *:px-5 *:py-3">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Bio">Mi trabajo</a></li>
        <li><a href="#Services">Servicios</a></li>
        <li><a href="#Reviews">Reseñas</a></li>  
        <li><a href="#Ubicacion">Ubicación</a></li>
      </ul>
    </nav>
  );
} 


