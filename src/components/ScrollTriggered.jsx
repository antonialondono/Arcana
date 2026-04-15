import { motion } from 'framer-motion'
import './ScrollTriggered.css'

export default function ScrollTriggered() {
  const sections = [
    {
      title: 'Objetivo',
      description: 'Proveer a las comunidades residenciales de un sistema integrado, donde la tecnología permite facilitar procesos, mejorar la trazabilidad, y enfrentar la seguridad con la mejor tecnología que de confianza a sus usuarios.',
      
    },
    {
      title: 'Residentes',
      description: 'Menos llamadas, mayor tranquilidad para autorizar visitas. Con la app, puedes confiar en los accesos seguros a tu comunidad, administrar miembros del hogar, programar domicilios y recibir notificaciones cuando recibas un paquete.',
      
    },
    {
      title: 'Portería',
      description: 'Sistema más claro para reducir presión y agilizar ingresos. Tecnología que permite mayor trazabilidad, un monitoreo más seguro, y confianza entre el residente y su servicio de seguridad.',
      
    },
  ]

  return (
    <div className="scroll-triggered-container">
      {sections.map((section, i) => (
        <ScrollCard key={section.title} {...section} index={i} />
      ))}
    </div>
  )
}

const containerVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

function ScrollCard({ title, description, index }) {
  return (
    <motion.div
      className={`scroll-card scroll-card-${index}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="scroll-card-content">
        <motion.div
          className="scroll-card-icon"
          variants={itemVariants}
        >
        </motion.div>
        <motion.div variants={itemVariants} className="scroll-card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
