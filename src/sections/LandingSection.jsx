import FeatherIcon from "feather-icons-react";

function LandingSection() {
  return (
    <section className="p-4 flex flex-col justify-between items-center gap-4 h-screen pt-20">
      <div className="flex flex-col gap-4 z-10 justify-center flex-1">
        <h1 className="uppercase">Geofencing within Body Worn</h1>
        <p className="text-2xl font-medium">
          A UX-research project to explore geofencing capabilities in Body
          Worn solutions
        </p>
      </div>
      <img
        className="object-cover h-screen w-screen absolute left-0 top-0 z-0"
        src="/blue-map.png"
        alt=""
      ></img>
      <div className="z-10">
        <a
          href="#background"
          className="text-blue-950 duration-300 transition-colors font-medium py-3 px-8 rounded-full flex items-center gap-1 cursor-pointer border border-blue-200/70 bg-blue-100/30 hover:bg-blue-400/30 backdrop-blur-2xl z-20 shadow-md"
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
