import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="navbar">
      <nav className="navbar__links" aria-label="Navegacion principal">
        <div className="container navbar__links-inner">
          <div className="navbar__item navbar__item--inicio">
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </div>
          <span>|</span>
          <NavLink to="/community">Comunidad</NavLink>
          <span>|</span>
          <NavLink to="/contact">Contáctanos</NavLink>
        </div>
      </nav>

      <div className={`navbar__mobile ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/community">Comunidad</NavLink>
        <NavLink to="/contact">Contáctanos</NavLink>
      </div>
      <div className="container navbar__inner">
        <button
          type="button"
          className="navbar__toggle"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar