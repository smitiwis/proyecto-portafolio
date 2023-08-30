export const ITEMS = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Proyectos",
    path: "/proyectos",
  },
  {
    name: "Habilidades",
    path: "/habilidades",
  },
  {
    name: "Formación",
    path: "/formacion",
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
  {
    name: "Experiencia",
    path: "/experiencia",
  },
];

export const PROFILES = [
  {
    id: 1,
    icono: "icon-grafico3",
    titulo: "Tendencia",
    descripcion:
      "Me puedo adaptar rapidamente a las nuevas tecnologías de desarrollo web y así poder adquirir nuevos conocimientos.",
  },
  {
    id: 2,
    icono: "icon-time",
    titulo: "Agilidad",
    descripcion:
      "Trabajo y mido mi tiempo, busco lograr mis objetivos el en tiempo estimado para poder complir con mis tareas.",
  },
  {
    id: 3,
    icono: "icon-like",
    titulo: "Confianza",
    descripcion:
      "Soy una persona con principios muy claros de la vida, soy comprensivo y trato de mejorar en mis habilidades blandas.",
  },
  {
    id: 4,
    icono: "as",
    titulo: "Seguridad",
    descripcion:
      "Soy cauteloso en mis cosas, asi que no divulgo información a terceras personas es un hábito que lo tengo como persona.",
  },
  {
    id: 5,
    icono: "as",
    titulo: "Creatividad",
    descripcion:
      "Me gusta el mundo del desarrollo web especialemnte la parte Front-end, mi creatividad muchas veces me sorprende a la hora de ponerteme a codear.",
  },
  {
    id: 6,
    icono: "as",
    titulo: "Responsabilidad",
    descripcion:
      "Soy una persona responsable en mi trabajo, estaré a la par buscando mejorar profesionalmente y ser cada día mejor en mi trabajo y como persona.",
  },
];

export const EXPERIENCIA_LOBORAL = [
  {
    title: "May. 2022 - Jul. 2023",
    cardTitle: (
      <div className="d-flex align-items-center gap-2 mb-2">
        <img
          height={30}
          src={`${process.env.PUBLIC_URL}/images/betsofice.png`}
          alt=""
        />
        <span>Betsoffice SAC</span>
      </div>
    ),
    cardSubtitle: (
      <div>
        <p>Desarrollador frontend</p>
        <div className="d-flex gap-2">
          <img
            height={30}
            src={`${process.env.PUBLIC_URL}/images/olimpo.png`}
            alt="olimpo"
          />
          <p className="mb-0">
            <b>Cliente: Olimpo.bet (Perú y Ecuador): </b>
            Es una casa de apuestas que brinda entretenimiento digital en
            apuestas deportivas, casino y deportes virtuales.
          </p>
        </div>
      </div>
    ),
    cardDetailedText: (
      <div>
        <ol>
          <li>
            <b>Proyecto: Juegos virtuales (Angular 13): </b>
            <span>
              <ul>
                <li>
                  <b>La Polla Olimpo: </b>
                  <span>
                    Es un juego virtual para predecir resultados en eventos
                    deportivos.
                  </span>
                </li>
                <li>
                  <b>Popularity Olimpo: </b>
                  <span>
                    la respuesta más elegida por todos los participantes.
                  </span>
                </li>
              </ul>
            </span>
          </li>
          <li>
            <b>Proyecto: Programa de lealtad (ReactJS):</b>
            <p>
              Es un aplicativo para mostrar puntos (Libras) el cual segmenta a
              los jugadores con mas actividad.
            </p>
          </li>
          <li>
            <b>Proyecto: Marketplace (ReactJS + TS)</b>
            <p>
              Es una tienda virtual que busca premiar y retener a los clientes
              habituales, ofreciendo incentivos y recompensas por su fidelidad.
              Es un módulo
            </p>
          </li>
          <li>
            <b>Proyecto: Real Time Notifications RTB (ReactJS + TS)</b>
            <p>
              para notificar premios, promociones, depósitos, etc. en tiempo
              real a los usuarios.
            </p>
          </li>
        </ol>

        <div className="ps-3">
          <b>Principales tareas ejecutadas:</b>
          <div>
            <ul>
              <li>Soporte en el backoffice de La Polla y Popularity.</li>
              <li>Soporte a la plataforma web.(Perú - Ecuador)</li>
              <li>Integración de proyectos en el sitio web.</li>
              <li>
                Desarrollo y mantenimiento de nuevos módulos y componentes.
              </li>
              <li>Correcciones de bugs e incongruencias en el sitio web.</li>
              <li>Desarrollo de scripts para nuevas funcionalidades.</li>
              <li>Desarrollo de animaciones.</li>
              <li>
                Maquetación de los diseños recibidos por el área de UX-UI.
              </li>
              <li>Manejo de Git para versionar los proyectos.</li>
              <li>
                Desarrollo de microlibrerías para facilitar la maquetación de
                diseños.
              </li>
              <li>
                Consumir servicios (API) para mostrar información al usuario.
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Abr. 2021 - May. 2022",
    cardTitle: (
      <div className="d-flex align-items-center gap-2 mb-2">
        <img
          height={30}
          src={`${process.env.PUBLIC_URL}/images/tata.png`}
          alt=""
        />
        <span>Tata Consultancy Services (TATA)</span>
      </div>
    ),
    cardSubtitle: (
      <div>
        <p>Desarrollador frontend</p>
        <div className="d-flex gap-2">
          <img
            height={30}
            src={`${process.env.PUBLIC_URL}/images/interbank.png`}
            alt="olimpo"
          />
          <p className="mb-0">
            <b>Cliente: Interbank </b>
            Es un banco muy reconocido que ofrece servicios de transferencias en
            todas sus modalidades tanto en soles como en dólares
          </p>
        </div>
      </div>
    ),
    cardDetailedText: (
      <div>
        <b>Proyecto: Ibk-Nexbie (Angular 12 - Ionic)</b>
        <p>
          Aplicación en WEB, REST y APP que permite hacer movimientos, pagos de
          servicios, transferencias, pagos masivos, etc.
        </p>
        <b>Principales tareas ejecutadas:</b>
        <div>
          <ul>
            <li>
              Desarrollo de scripts, animaciones, vistas al usuario e
              implementación de lógica para el negocio de "ibk empresas".
            </li>
            <li>
              Generar los IPA y APK para pruebas en dispositivos móviles
              (Android-Ios).
            </li>
            <li>
              Consumir servicios (API) para mostrar información al usuario.
            </li>
            <li>
              Desarrollador de nuevas funcionalidades dentro de la banca
              empresas de interbank.
            </li>
            <li>
              Implementación biométrica para la autenticación de los usuarios al
              momento de loguearse.
            </li>
            <li>
              Implementación de un buzón de sugerencias cada vez que un usuario
              realice algún pago o transferencia.
            </li>
            <li>
              Desarrollo y mantenimiento de módulos y componentes en Angular.
            </li>
            <li>Maquetación de los nuevos diseños dados por UI/UX.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Nov. 2018 - Ene. 2021",
    cardTitle: (
      <div className="d-flex align-items-center gap-2 mb-2">
        <img
          height={30}
          src={`${process.env.PUBLIC_URL}/images/isgd.png`}
          alt=""
        />
        <span>Ingenieria Social para la Gestión del Desarrollo (ISGD)</span>
      </div>
    ),
    cardSubtitle: `Desarrollador de Front-end`,
    cardDetailedText: (
      <div>
        <b>Proyecto: Grupo Preventis S.A.C.</b>
        <p>
          Aplicación que permite a la clínica preventis la gestión backoffice de
          citas y pacientes.
        </p>
        <b>Principales tareas ejecutadas:</b>
        <ul>
          <li>Desarrollo de scripts, vistas y animaciones.</li>
          <li>Desarrollo de servicios web para la comunicación end to end.</li>
          <li>Desarrollo de módulos y componentes front-end.</li>
          <li>
            Desarrollo de microlibrerías para facilitar el desarrollo del
            aplicativo. - Pruebas con la Unitarias.
          </li>
        </ul>
        <b>Proyecto: Intranet y cursos en Línea</b>
        <p>
          Aplicación web para la ONG ISGD, que se encarga de brindar cursos en
          línea basados en discriminación y problemas sociales.
        </p>
        <b>Principales tareas ejecutadas:</b>
        <ul>
          <li>Desarrollo de scripts, vistas y animaciones.</li>
          <li>Desarrollo y mantenimiento de módulos y componentes frontend.</li>
          <li>
            Desarrollar una integración web con la plataforma y la API DROPBOX.
          </li>
        </ul>
        <p>
          Gracias al proyecto muchos de los estudiantes se sienten cómodos,
          muchos de ellos no estaban familiarizados con las computadoras y las
          tecnologías y se tuvo que experimentar con una interfaz muy fácil de
          interactuar y estudiar.
        </p>
        <b>
          Proyecto: Pagos digitales Universidad Nacional del Centro del Perú
        </b>
        <p>
          Aplicación que permite a estudiantes y personas realizar pagos
          digitales a la Universidad Nacional del Centro del Perú.
        </p>
        <ul>
          <li>Desarrollo de scripts, vistas y animaciones.</li>
          <li>Desarrollo de módulos y componentes front-end.</li>
          <li>
            Desarrollo de microlibrerías para facilitar el desarrollo del
            aplicativo.
          </li>
          <li>Implementación Culqi en el software.</li>
          <li>Pruebas con la Unitarias.</li>
        </ul>
      </div>
    ),
  },
  {
    title: <div>Ago. 2017 - Ago. 2018</div>,
    cardTitle: (
      <div className="d-flex align-items-center gap-2 mb-2">
        <img
          height={30}
          src={`${process.env.PUBLIC_URL}/images/xurface.png`}
          alt=""
        />
        <span>Xurface</span>
      </div>
    ),
    cardSubtitle: `Desarrollador Frontend `,
    cardDetailedText: (
      <div>
        <b>Proyecto: METTA</b>
        <p>
          Este proyecto está relacionado con las actividades de back office de
          la aseguradora RIMAC.
        </p>
        <b>Principales tareas ejecutadas:</b>
        <ul>
          <li>Desarrollo de scripts, vistas y animaciones.</li>
          <li>Desarrollo de módulos y componentes front-end.</li>
          <li>Implementación de pusher.</li>
          <li>Pruebas unitarias.</li>
          <li>
            Desarrollo de servicios web para solicitar y enviar información al
            software SAP.
          </li>
          <li>
            Implementación de tecnologías en tiempo real que permitan a los
            analistas recibir solicitudes de back office, generando una
            asistencia a los tickets de forma más rápida.
          </li>
        </ul>
      </div>
    ),
  },
];
