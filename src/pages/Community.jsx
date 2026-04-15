import './Community.css'
import { motion } from 'framer-motion'
import Card from '../components/Cards'
import { FiUsers, FiTrendingUp, FiClock, FiStar } from 'react-icons/fi'

function Community() {
  return (
    <div className="page community">
      {/* SECCIÓN HEADER */}
      <section className="container community__header">
        <h1>Comunidades que confían en ARCANA</h1>
        <p>miles de residentes protegidos, cientos de administradores satisfechos</p>
      </section>

      {/* SECCIÓN DE ESTADÍSTICAS */}
      <section className="container community__stats">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Card
            title={<><FiUsers /> 500+</>}
            description="Comunidades activas"
            modifier="feature-card community__stat-card"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Card
            title={<><FiTrendingUp /> 90%</>}
            description="Resolución de incidentes"
            modifier="feature-card community__stat-card"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Card
            title={<><FiClock /> 24/7</>}
            description="Monitoreo continuo"
            modifier="feature-card community__stat-card"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Card
            title={<><FiStar /> 98%</>}
            description="Satisfacción del cliente"
            modifier="feature-card community__stat-card"
          />
        </motion.div>
      </section>

      {/* SECCIÓN HISTORIAS DE ÉXITO */}
      <section className="container community__stories">
        <div className="community__stories-header">
          <h2>Historias de <span className="community__highlight">éxito</span></h2>
          <p>Comunidades que ya confían en ARCANA</p>
        </div>
        <div className="community__stories-grid">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card
              title={<span className="community__story-number">01</span>}
              description={<>
                <p className="community__story-text">"Desde que implementamos ARCANA, los accidentes de seguridad se redujeron un 50%. Los residentes se sienten mucho más seguros y la gestión es mucho más eficiente."</p>
                <div className="community__story-author">
                  <h4>María González</h4>
                  <span>Administradora</span>
                  <span className="community__story-company">Parcelación Vista Hermosa</span>
                </div>
              </>}
              modifier="feature-card community__story-card"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card
              title={<span className="community__story-number">02</span>}
              description={<>
                <p className="community__story-text">"La app inicial es increíblemente fácil de usar. Ahora autorizo videos en seguridad sin tener que estar pendiente del portero."</p>
                <div className="community__story-author">
                  <h4>Carlos Ramírez</h4>
                  <span>Residente</span>
                  <span className="community__story-company">Conjunto Los Pinos</span>
                </div>
              </>}
              modifier="feature-card community__story-card"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card
              title={<span className="community__story-number">03</span>}
              description={<>
                <p className="community__story-text">"El panel de administración nos permite tener movilizados completa. Los reportes automatizados ahorran un montón de trabajo codo a codo cada semana."</p>
                <div className="community__story-author">
                  <h4>Ana Morales</h4>
                  <span>Directora de seguridad</span>
                  <span className="community__story-company">Residencial El Bosque</span>
                </div>
              </>}
              modifier="feature-card community__story-card"
            />
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN CASOS DE ÉXITO */}
      <section className="container community__success-cases">
        <div className="community__cases-header">
          <h2>Casos de <span className="community__highlight">éxito</span></h2>
        </div>
        <div className="community__cases-grid">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card
              title="Parcelación Vista Hermosa"
              description={<>
                <p>Con 150 lotes y más de 500 residentes, Vista Hermosa enfrentaba problemas diarios de seguridad y gestión de visitantes. Desde la implementación de ARCANA, los incidentes se redujeron un 95% y la satisfacción de los residentes aumentó significativamente.</p>
                <div className="community__case-metrics">
                  <div className="community__metric">
                    <span className="community__metric-value">95%</span>
                    <span className="community__metric-label">Menos incidentes</span>
                  </div>
                  <div className="community__metric">
                    <span className="community__metric-value">60%</span>
                    <span className="community__metric-label">Tiempo ahorrado</span>
                  </div>
                  <div className="community__metric">
                    <span className="community__metric-value">100%</span>
                    <span className="community__metric-label">Trazabilidad</span>
                  </div>
                </div>
              </>}
              modifier="feature-card community__case-card"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card
              title="Conjunto Los Pinos"
              description={<>
                <p>Un edificio de 8 pisos con 64 apartamentos que buscaba modernizar su sistema de portería. ARCANA no solo mejoró la seguridad, sino que redujo los costos operativos y mejoró la experiencia de los residentes.</p>
                <div className="community__case-metrics">
                  <div className="community__metric">
                    <span className="community__metric-value">80%</span>
                    <span className="community__metric-label">Menos llamadas</span>
                  </div>
                  <div className="community__metric">
                    <span className="community__metric-value">40%</span>
                    <span className="community__metric-label">Ahorro en costos</span>
                  </div>
                  <div className="community__metric">
                    <span className="community__metric-value">98%</span>
                    <span className="community__metric-label">Satisfacción</span>
                  </div>
                </div>
              </>}
              modifier="feature-card community__case-card"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Community