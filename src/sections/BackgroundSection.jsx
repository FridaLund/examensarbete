import Section from "../components/Section";

function BackgroundSection() {
  return (
    <Section
      title="Background"
      id="background"
      image={{ src: "/map.png" }}
      paragraphs={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est nulla, consectetur vel risus ut, ultrices varius ex. Praesent sed pretium dolor. Nunc venenatis sit amet diam egestas venenatis. Cras tristique eros quis urna pretium cursus. Vestibulum tincidunt accumsan tortor. Maecenas ut lorem ac nunc posuere pulvinar. Vestibulum non posuere mauris, in fermentum lectus. In hac habitasse platea dictumst. Nam lobortis nec nisl nec mollis. Sed dignissim erat quis euismod rhoncus.",
        "Cras dictum egestas vestibulum. In eu risus enim. Suspendisse pellentesque ultricies risus, non iaculis ipsum pellentesque at. Vestibulum vel magna nec eros ornare convallis. Maecenas ornare congue nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec posuere sit amet arcu tempor ullamcorper. Vestibulum convallis malesuada ipsum, nec pretium lorem fringilla nec. Nulla a ante pretium nisl mollis bibendum sed quis est. Aliquam vehicula, sem et tempor dignissim, leo risus vulputate massa, nec feugiat turpis mi nec lorem. Nam faucibus ultrices turpis ac rutrum.",
        "Donec sit amet laoreet lectus, sit amet finibus nisi. Ut sapien magna, porttitor eget eros ultrices, porta commodo metus. Quisque convallis quam at ex elementum, sit amet consectetur libero varius. Cras posuere at lacus quis lobortis. Vestibulum ac libero sem. Vivamus dictum hendrerit mauris, varius elementum massa consectetur eget. Cras sit amet diam gravida, luctus odio vitae, porttitor enim. Proin id fringilla tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ut diam vitae nunc euismod dictum. Phasellus dapibus nisi leo, in condimentum mauris luctus et. Ut.",
      ]}
    />
  );
}

export default BackgroundSection;
