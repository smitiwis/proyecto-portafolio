import { EXPERIENCIA_LOBORAL, PROFILES } from "../../constants";
import Container from "react-bootstrap/esm/Container";
import { Chrono } from "react-chrono";

const ExperienciasLaborables = () => {
  return (
    <section className="secction-experiencia">
      <Container>
        <h1 className="text text--title text-center mb-5">
          Experiencia laboral
        </h1>

        <div style={{ width: "100%", height: "auto" }}>
          <Chrono
            items={EXPERIENCIA_LOBORAL}
            mode="VERTICAL_ALTERNATING"
            scrollable
            cardHeight={200}
            lineWidth={5}
            hideControls={true}
            disableClickOnCircle={true}
            theme={{
              primary: "#0080ff",
              secondary: "transparent",
              cardBgColor: "white",
              titleColor: "#0080ff",
              titleColorActive: "#0080ff",
            }}
            fontSizes={{
              cardSubtitle: "0.85rem",
              cardText: "0.8rem",
              cardTitle: "1rem",
              title: "1rem",
            }}
            classNames={{
              card: "my-card",
              cardMedia: "my-card-media",
              cardSubTitle: "my-card-subtitle",
              cardText: "my-card-text",
              cardTitle: "my-card-title",
              controls: "my-controls",
              title: "my-title",
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default ExperienciasLaborables;
