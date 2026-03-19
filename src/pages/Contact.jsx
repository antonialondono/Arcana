import './Contact.css'

function Contact() {
  return (
    <div className="page contact">
      <section className="container contact__box">
        <h1>Contacto del proyecto</h1>
        <p>
          Arcana cuenta con un MVP en fase de pruebas y requiere identidad de marca, estrategia de marca y
          lineamientos de comunicacion.
        </p>

        <div className="contact__data">
          <p>
            <strong>Nombre:</strong> Manuel Arango
          </p>
          <p>
            <strong>Telefono:</strong> +57 322 6631092
          </p>
          <p>
            <strong>Email:</strong> tecnologia@montesereno.com.co
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
