import './Community.css'
import { motion } from 'framer-motion'
import Card from '../components/Cards'
import { FiUsers, FiTrendingUp, FiClock, FiStar } from 'react-icons/fi'
import cardsData from '../components/Cards.json'

// Mapeo de iconos
const iconMap = {
  FiUsers,
  FiTrendingUp,
  FiClock,
  FiStar
}

// Componente para Stats (sin whileHover)
const CardWithMotionSimple = ({ card, delay = 0 }) => {
  const IconComponent = iconMap[card.icon]
  const animConfig = cardsData.animationSimple
  
  return (
    <motion.div
      style={{ height: '100%' }}
      whileInView={animConfig.whileInView}
      initial={animConfig.initial}
      transition={{ ...animConfig.transition, delay }}
      viewport={animConfig.viewport}
    >
      <Card 
        title={<><IconComponent /> {card.title}</>}
        description={card.description}
        modifier={card.modifier}
      />
    </motion.div>
  )
}

// Componente para Stories
const StoryCard = ({ story, delay = 0 }) => {
  const animConfig = cardsData.animationSimple
  
  return (
    <motion.div
      style={{ height: '100%' }}
      whileInView={animConfig.whileInView}
      initial={animConfig.initial}
      transition={{ ...animConfig.transition, delay }}
      viewport={animConfig.viewport}
    >
      <Card
        title={<span className="community__story-number">{story.number}</span>}
        description={<>
          <p className="community__story-text">"{story.quote}"</p>
          <div className="community__story-author">
            <h4>{story.author}</h4>
            <span>{story.role}</span>
            <span className="community__story-company">{story.company}</span>
          </div>
        </>}
        modifier={story.modifier}
      />
    </motion.div>
  )
}

// Componente para Casos
const CasoCard = ({ casoData, delay = 0 }) => {
  const animConfig = cardsData.animationSimple
  
  return (
    <motion.div
      style={{ height: '100%' }}
      whileInView={animConfig.whileInView}
      initial={animConfig.initial}
      transition={{ ...animConfig.transition, delay }}
      viewport={animConfig.viewport}
    >
      <Card
        title={casoData.title}
        description={<>
          <p>{casoData.description}</p>
          <div className="community__case-metrics">
            {casoData.metrics.map((metric, index) => (
              <div key={index} className="community__metric">
                <span className="community__metric-value">{metric.value}</span>
                <span className="community__metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </>}
        modifier={casoData.modifier}
      />
    </motion.div>
  )
}

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
        {cardsData.stats.map((card, index) => (
          <CardWithMotionSimple key={card.id} card={card} delay={index * 0.1} />
        ))}
      </section>

      {/* SECCIÓN HISTORIAS DE ÉXITO */}
      <section className="container community__stories">
        <div className="community__stories-header">
          <h2>Historias de <span className="community__highlight">éxito</span></h2>
          <p>Comunidades que ya confían en ARCANA</p>
        </div>
        <div className="community__stories-grid">
          {cardsData.stories.map((story, index) => (
            <StoryCard key={story.id} story={story} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* SECCIÓN CASOS DE ÉXITO */}
      <section className="container community__success-cases">
        <div className="community__cases-header">
          <h2>Casos de <span className="community__highlight">éxito</span></h2>
        </div>
        <div className="community__cases-grid">
          {cardsData.cases.map((casoData, index) => (
            <CasoCard key={casoData.id} casoData={casoData} delay={index * 0.1} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Community