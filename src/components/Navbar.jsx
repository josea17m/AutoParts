function Navbar() {
  return (
    <div className="container-navbar">
      <ul className="navbar">
        <a href="/productos" className="navbar-item">
          Productos
        </a>
        <a href="donde-estamos" className="navbar-item">
          Donde estamos
        </a>
        <a href="/contactanos" className="navbar-item">
          Contáctanos
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
