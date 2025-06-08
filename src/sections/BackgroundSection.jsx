import Section from "../components/Section";

function BackgroundSection() {
  return (
    <Section
      title="Background"
      id="background"
      image={{ src: "/map.png", alt: "image of a map" }}
      paragraphs={[
        "Axis Communications assigned me this project to explore how geofencing could be integrated into their Body Worn Camera Solution, following a customer request to restrict video recording to specific areas. The focus, however, is on a broader geofencing concept beyond that single use case.",
        "Geofencing uses virtual boundaries—based on GPS or network data—to trigger actions, such as automatic camera activation within defined zones. This has strong potential in urban security settings but also raises ethical and privacy concerns.",
        "The project aims to propose a geofencing solution tailored for Axis Body Worn, identify additional use cases, and define user flows. Due to business constraints, no end-user testing was possible, and the final output is a task/user flow rather than a full UI design.",
      ]}
    />
  );
}

export default BackgroundSection;
