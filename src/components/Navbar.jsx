import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../imagenes/Logo.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="navbar">
      <div className="container navbar__wrapper">
        <div className="navbar__brand">
          <img src={logo} alt="Logo ARCANA" className="navbar__logo" />
        </div>

        <nav className="navbar__links" aria-label="Navegacion principal">
          <NavLink to="/" end className="navbar__link">
            Inicio
          </NavLink>
          <NavLink to="/community" className="navbar__link">
            Comunidad
          </NavLink>
          <NavLink to="/contact" className="navbar__link">
            Solicitar demo
          </NavLink>
        </nav>

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

      <div className={`navbar__mobile ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" end className="navbar__link">
          Inicio
        </NavLink>
        <NavLink to="/community" className="navbar__link">
          Comunidad
        </NavLink>
        <NavLink to="/contact" className="navbar__link">
          Solicitar demo
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar