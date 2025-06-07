import FeatherIcon from "feather-icons-react";

function LandingSection() {
  return (
    <section className="p-4 flex flex-col justify-between items-center gap-4 h-screen pt-20">
      <div className="flex items-start gap-9">
        <div className="flex flex-col gap-4">
          <h1>Geo fencing in body worn solution</h1>
          <p className="text-2xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            cursus nunc, quis bibendum leo. Vivamus auctor metus sit amet mi
            finibus pretium. Curabitur tellus lorem, tincidunt id dolor sit
            amet, molestie pharetra ligula. Mauris eget congue nibh. Maecenas in
            purus consectetur, feugiat quam at, venenatis mauris. Nullam ac.
          </p>
        </div>
        <img
          className="hidden md:block object-contain rounded-4xl max-w-[50%]"
          src="/map.png"
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
