import './Community.css'

function Community() {
  return (
    <div className="page community">
      <section className="container community__header">
        <h1>Comunidad y bienestar</h1>
        <p>
          Arcana se prueba actualmente con la comunidad de Monte Sereno, en El Retiro, Antioquia.
        </p>
      </section>

      <section className="container community__cards">
        <article>
          <h2>Residentes</h2>
          <p>
            El dolor principal no es la llamada: es la carga mental de depender del celular para autorizar
            ingresos.
          </p>
        </article>

        <article>
          <h2>Porteros</h2>
          <p>
            El mayor obstaculo operativo es la falta de respuesta oportuna, que genera demoras y presion en
            porteria.
          </p>
        </article>
      </section>
    </div>
  )
}

export default Community