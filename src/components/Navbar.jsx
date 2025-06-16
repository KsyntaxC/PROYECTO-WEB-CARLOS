import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-nav">
          <Link className="nav-link" to="/">PRINCIPAL</Link>
          <Link className="nav-link" to="/peliculas">PELÍCULAS</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;