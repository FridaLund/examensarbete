import Section from "../components/Section";

function ReflectionSection() {
  return (
    <Section
      title="Reflection"
      id="reflection"
      image={{
        src: "/reflection1.jpg",
        alt: "image of a bench by the sea on a cloudy day",
      }}
      paragraphs={[
        "A recurring thought throughout the project was how the outcome might have differed with direct input from end users. Their insights could have confirmed the final result—or led it in a different direction. The personas, in particular, would likely have been shaped differently. Were there needs that went unnoticed, or ones that turned out to be irrelevant?",
        "In my view, user insights are essential for developing a product that truly meets their needs. Interviews help uncover patterns, define pain points, and better understand user motivations—providing a solid foundation to build on.",
        "Unexpected personal challenges outside the project affected my focus at times and caused some delays. Initially, this was stressful, but in the end, it created space to produce lo-fi wireframes. It felt rewarding to go the extra mile, even though we had agreed early on that a user flow would be sufficient.",
      ]}
    />
  );
}

export default ReflectionSection;
