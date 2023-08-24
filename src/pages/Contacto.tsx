const Contacto = () => {
  return (
    <div className="contacto">
      <div className="contacto__cont">
        <div className="contacto__cont-h1">
          <h1 className="contacto__h1-texto">Empecemos una conversación</h1>
        </div>
        <div className="contacto__cont-parrafo">
          <p className="contacto__parrafo-texto">
            Por favor, todos los campos son obligatorios.
          </p>
        </div>

        <form className="contacto__form">
          <div className="contacto__form-item">
            <label className="contacto__form-data">Apellidos:</label>
            <input className="contacto__form-input" type="text" />
          </div>
          <div className="contacto__form-item">
            <label className="contacto__form-data">Nombres:</label>
            <input className="contacto__form-input" type="text" />
          </div>

          <div className="contacto__form-item">
            <label className="contacto__form-data">Empresa:</label>
            <input className="contacto__form-input" type="text" />
          </div>
          <div className="contacto__form-item">
            <label className="contacto__form-data">Cargo en la empresa:</label>
            <input className="contacto__form-input" type="text" />
          </div>
          <div className="contacto__form-item">
            <label className="contacto__form-data">Número de contacto:</label>
            <input
              className="contacto__form-input"
              type="text"
              placeholder="+51 954 123 456"
            />
          </div>
          <div className="contacto__form-item">
            <label className="contacto__form-data">Correo:</label>
            <input
              className="contacto__form-input"
              type="text"
              placeholder="example@admin.com"
            />
          </div>
          <div className="contacto__form-item">
            <label className="contacto__form-data">Comentario:</label>
            <textarea
              className="contacto__form-textArea"
              cols={30}
              rows={3}
            ></textarea>
          </div>
          <div className="contacto__cont-boton">
            <input
              className="contacto__boton boton"
              type="button"
              value="Enviar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
