import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    comunidad: '',
    departamento: '',
    municipio: '',
    mensaje: ''
  })

  const [departamentos, setDepartamentos] = useState([])
  const [municipios, setMunicipios] = useState([])
  const [loadingDepts, setLoadingDepts] = useState(false)
  const [loadingMunis, setLoadingMunis] = useState(false)
  const [errorDepts, setErrorDepts] = useState(null)
  const [errorMunis, setErrorMunis] = useState(null)
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    const fetchDepartamentos = async () => {
      setLoadingDepts(true)
      setErrorDepts(null)
      try {
        const res = await fetch('https://api-colombia.com/api/v1/Department')
        if (!res.ok) throw new Error('Error al cargar departamentos')
        const data = await res.json()
        const sorted = data.sort((a, b) => a.name.localeCompare(b.name))
        setDepartamentos(sorted)
      } catch (err) {
        setErrorDepts('No se pudieron cargar los departamentos. Intenta de nuevo.')
      } finally {
        setLoadingDepts(false)
      }
    }
    fetchDepartamentos()
  }, [])

  useEffect(() => {
    if (!formData.departamento) {
      setMunicipios([])
      return
    }
    const fetchMunicipios = async () => {
      setLoadingMunis(true)
      setErrorMunis(null)
      setMunicipios([])
      try {
        const res = await fetch(
          `https://api-colombia.com/api/v1/Department/${formData.departamento}/cities`
        )
        if (!res.ok) throw new Error('Error al cargar municipios')
        const data = await res.json()
        const sorted = data.sort((a, b) => a.name.localeCompare(b.name))
        setMunicipios(sorted)
      } catch (err) {
        setErrorMunis('No se pudieron cargar los municipios. Intenta de nuevo.')
      } finally {
        setLoadingMunis(false)
      }
    }
    fetchMunicipios()
  }, [formData.departamento])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'departamento' ? { municipio: '' } : {})
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setEnviado(true)
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        comunidad: '',
        departamento: '',
        municipio: '',
        mensaje: ''
      })
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
              <label htmlFor="departamento">Departamento</label>
              {errorDepts && <p className="contact__field-error">{errorDepts}</p>}
              <select
                id="departamento"
                name="departamento"
                value={formData.departamento}
                onChange={handleChange}
                required
                disabled={loadingDepts}
              >
                <option value="">
                  {loadingDepts ? 'Cargando departamentos…' : 'Selecciona un departamento'}
                </option>
                {departamentos.map(dept => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact__form-group">
              <label htmlFor="municipio">Municipio</label>
              {errorMunis && <p className="contact__field-error">{errorMunis}</p>}
              <select
                id="municipio"
                name="municipio"
                value={formData.municipio}
                onChange={handleChange}
                required
                disabled={!formData.departamento || loadingMunis}
              >
                <option value="">
                  {!formData.departamento
                    ? 'Primero selecciona un departamento'
                    : loadingMunis
                    ? 'Cargando municipios…'
                    : 'Selecciona un municipio'}
                </option>
                {municipios.map(muni => (
                  <option key={muni.id} value={muni.id}>
                    {muni.name}
                  </option>
                ))}
              </select>
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