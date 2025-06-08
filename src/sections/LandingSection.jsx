import FeatherIcon from "feather-icons-react";

function LandingSection() {
  return (
    <section className="p-4 flex flex-col justify-between items-center gap-4 h-screen pt-20">
      <div className="flex items-start gap-9">
        <div className="flex flex-col gap-4">
          <h1 className="uppercase">Geofencing within Body Worn</h1>
          <p className="text-2xl font-medium">
            A UX-research project to explore geofencing capabilities in Body
            Worn solutions{" "}
          </p>
        </div>
        <img
          className="hidden md:block object-contain rounded-4xl max-w-[50%]"
          src="/geofence.png"
          alt=""
        ></img>
      </div>
      <div>
        <a
          href="#background"
          className="bg-blue-200 hover:bg-blue-300 text-blue-950 duration-300 transition-colors font-medium py-3 px-8 rounded-full flex items-center gap-1 cursor-pointer"
        >
          Read more
          <FeatherIcon
            className="motion-safe:animate-bounce size-5"
            icon="arrow-down"
          />
        </a>
      </div>
    </section>
  );
}

export default LandingSection;
