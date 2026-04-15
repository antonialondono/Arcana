import './Home.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Cards'
import logo_azul  from '../imagenes/Logo_azul.svg'
import arcanaImg from '../imagenes/arcana.svg'
import { FiShield, FiClock, FiUsers, FiSmartphone, FiMapPin, FiSettings } from 'react-icons/fi'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="page home">
      {/* SECCIÓN HERO */}
      <section className="container home__hero">
        <div className="home__hero-content">
          <img src={logo_azul} alt="Logo" className="home__logo" />
          
          <img src={arcanaImg} alt="Arcana" className="home__arcana-title" />
          <h2>TU COMUNIDAD RESGUARDADA</h2>
          <p>
            La plataforma de control inteligente para comunidades, apoyada en reconocimiento 
            facial, reconocimiento de placas vehiculares y automatizaciones.
          </p>
          
          <motion.button 
            className="btn btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
          >
            Solicitar demo
          </motion.button>

        </div>
      </section>

      {/* SECCIÓN DE MÉTODOS TRADICIONALES */}
      <section className="container home__methods">
        <h2>¿Tu parcelación aún depende de métodos tradicionales?</h2>
        <p>La mayoría de administradores de propiedad aún utilizan sistemas obsoletos y poco confiables.</p>
        
        <div className="home__methods-cards">
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card 
              title={<><FiShield /> Seguridad vulnerable</>}
              description="Regístro manual y sin información confiable de identidad real"
              modifier="feature-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card 
              title={<><FiClock /> Procesos lentos</>}
              description="Gestión manual de visitantes, demoras en autorización"
              modifier="feature-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card
              title={<><FiUsers /> Gestión compleja</>}
              description="Administración dispersa y complicada de la comunidad"
              modifier="feature-card"
            />
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN CONTROL DE ACCESO */}
      <section className="container home__control">
        <div className="home__control-header">
          <h2>Control de acceso</h2>
          <span className="home__control-highlight">Inteligente y seguro</span>
          <p> Arcana digitiliza y simplifica todo el proceso de gestión de visitantes.</p>
        </div>

        <div className="home__control-list">
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card 
              title={<><FiSmartphone /> Autorización instantánea</>}
              description="Los residentes aprueban videos en seguridad sin estar pendiente del portero"
              modifier="control-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card
              title={<><FiMapPin /> Verificación en portería</>}
              description="El portero confirma la identidad y otorga acceso automáticamente"
              modifier="control-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card
              title={<><FiMapPin /> Trazabilidad completa</>}
              description="Todo queda registrado en tiempo real e históricos accesibles"
              modifier="control-card"
            />
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN PLATAFORMA COMPLETA */}
      <section className="container home__complete">
        <h2>Todo lo que necesitas en <span className="highlight">una sola plataforma</span></h2>

        <div className="home__complete-cards">
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card 
              title={<><FiShield /> Seguridad total</>}
              description="Identifica amenaza y la bloquea automáticamente"
              modifier="complete-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card
              title={<><FiSmartphone /> Control remoto</>}
              description="Autoriza desde donde sea, acceso instantáneo para residentes"
              modifier="complete-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card 
              title={<><FiSettings /> Fácil administración</>}
              description="Reportes automáticos y alertas para mayor control"
              modifier="complete-card"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home