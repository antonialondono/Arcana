import './Home.css'

function Home() {
  return (
    <div className="page home">
      <section className="container home__hero">
        <div className="home__hero-left">
          <h1>Arcana</h1>
          <div className="home__hero-text">
            <h2>Control inteligente para comunidades</h2>
            <p>
              Arcana es una plataforma para la creacion y gestion de comunidades, apoyada en
              reconocimiento facial, reconocimiento de placas vehiculares y automatizaciones.
            </p>
          </div>
        </div>

        <div className="home__hero-cards" aria-label="Acciones principales">
          <article className="card">
            <span className="card__title">Controla</span>
            <p>desde un sólo lugar, quiénes pueden acceder a tu hogar</p>
          </article>
          <article className="card card--tall">
            <span className="card__title">Entérate</span>
            <p>de todas las novedades de tu comunidad</p>
          </article>
          <article className="card">
            <span className="card__title">Accede</span>
            <p>a todas las comodidades de tu comunidad.</p>
          </article>
        </div>
      </section>

      <section id="demo" className="container home__demo">
        <div className="home__video">
          <p>MVP funcional en pruebas con la comunidad de Monte Sereno, en El Retiro, Antioquia.</p>
        </div>
      </section>

      <section className="container home__blocks">
        <article className="home__block home__block--tall">
          <h3>Objetivo</h3>
          <p>Proveer a las comunidades residenciales de un sistema integrado,
            donde la tecnología permite facilitar procesos, mejorar la trazsabilidad, y 
            enfrentar la seguridad con la mejor tecnología que de confianza a sus usuarios. 
            </p>
        </article>
        <article className="home__block">
          <h3>Residentes</h3>
          <p>Menos llamadas, mayor tranquilidad para autorizar visitas. Con la app, puedes confiar en los 
            accesos seguros a tu comunidad, administrar miembros del hogar, programar domicilios y recibir 
            notificaciones cuando recibas un paquete.
            </p>
        </article>
        <article className="home__block">
          <h3>Porteria</h3>
          <p>Sistema mas claro para reducir presion y agilizar ingresos. Tecnología que permite mayor trazabilidad,
            un monitoreo más seguro, y confianza entre el residente y su servicio de seguridad. 
            </p>
        </article>
      </section>
    </div>
  )
}

export default Home