import Header from "./Header";
import LandingSection from "./sections/LandingSection";
import Section from "./components/Section";
import BackgroundSection from "./sections/BackgroundSection";
import ResultSection from "./sections/ResultSection";
import DiscussionSection from "./sections/DiscussionSection";
import Feedback from "./sections/Feedback";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <LandingSection />
        <BackgroundSection />
        <DiscussionSection />
        <ResultSection />
      </main>
      <footer>
        <Feedback />
      </footer>
    </div>
  );
}

export default App;
