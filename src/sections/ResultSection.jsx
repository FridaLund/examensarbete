import FeatherIcon from "feather-icons-react";
import Section from "../components/Section";

function ResultSection() {
  return (
    <Section
      title="Result"
      id="result"
      reverse
      image={{
        src: "/result1.png",
        alt: "image of a user flow and lo-fi wireframes",
      }}
      paragraphs={[
        "The project resulted in a proposed solution consisting of a task/user flow accompanied by lo-fi wireframes. It also included a recommendation for where geofence configuration should take place, specifically within Axis’s cloud platform, MySystems: Body Worn Live.",
        "In addition to the configuration recommendation, a set of suggested action points was developed. These outline the necessary steps and considerations that must be addressed for successful implementation of a geofencing feature within Body Worn Live.",
      ]}
    />
  );
}

export default ResultSection;
