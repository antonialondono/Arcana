import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    comunidad: '',
    mensaje: ''
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setEnviado(true)
    setTimeout(() => {
      setFormData({ nombre: '', email: '', telefono: '', comunidad: '', mensaje: '' })
      setEnviado(false)
    }, 3000)
  }

  return (
    <div className="page contact">
      <section className="container contact__section">
        <div className="contact__header">
          <h1>Lleva <span className="contact__highlight">ARCANA</span> a tu comunidad</h1>
          <p>Agenda una demo personalizada y descubre cómo ARCANA puede transformar la seguridad de tu parcelación</p>
        </div>

        <motion.div 
          className="contact__card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+57 300 123 4567"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="comunidad">Nombre de la comunidad</label>
                <input
                  type="text"
                  id="comunidad"
                  name="comunidad"
                  value={formData.comunidad}
                  onChange={handleChange}
                  placeholder="Parcelación / Conjunto"
                  required
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="mensaje">Mensaje (opcional)</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu comunidad..."
                rows="5"
              />
            </div>

            <motion.button
              type="submit"
              className="contact__btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={enviado}
            >
              {enviado ? '✓ Solicitud enviada' : 'Solicitar demo gratuita'}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="contact__features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>¿Qué incluye la demo?</h2>
          <article className="card contact__features-card">
            <ul className="contact__features-list">
              <li>
                <span className="contact__features-icon">●</span>
                <span>Demo personalizada de 30 minutos</span>
              </li>
              <li>
                <span className="contact__features-icon">●</span>
                <span>Asesoría sin compromiso</span>
              </li>
              <li>
                <span className="contact__features-icon">●</span>
                <span>Análisis de tus necesidades específicas</span>
              </li>
              <li>
                <span className="contact__features-icon">●</span>
                <span>Propuesta a la medida de tu comunidad</span>
              </li>
              <li>
                <span className="contact__features-icon">●</span>
                <span>Respuesta en menos de 24 horas</span>
              </li>
            </ul>
          </article>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact
