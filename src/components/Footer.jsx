import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__phrase">
          <p className="footer__brand">Arcana</p>
          <p>Control inteligente para brindar mayor tranquilidad a cada comunidad.</p>
        </div>

        <div className="footer__contact">
          <p className="footer__title">Contacto</p>
          <p>tecnologia@montesereno.com.co</p>
          <p>+57 322 663 1092</p>
        </div>

        <nav aria-label="Navegacion secundaria">
          <Link to="/">Inicio</Link>
          <Link to="/community">Comunidad</Link>
          <Link to="/contact">Solicitar demo</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer