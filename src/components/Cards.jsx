import './Card.css'
function Card({ title, description, modifier = '' }) {
  return (
    <article className={`card ${modifier}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default Card
