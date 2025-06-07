function Section(props) {
  return (
    <section
      id={props.id}
      className={`flex scroll-pt-[64px] pl-4 pr-4 min-h-screen pt-20 flex-col-reverse md:flex-row justify-start items-start gap-4 last:min-h-fit ${props.reverse ? "md:flex-row-reverse" : ""}`}
    >
      <img
        className="md:w-[40%] md:mt-3 object-contain rounded-4xl"
        src={props.image.src}
      ></img>
      <div>
        <h2>{props.title}</h2>
        <div className="flex flex-col gap-2">
          {props.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;
