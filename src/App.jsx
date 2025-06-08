import Header from "./Header";
import LandingSection from "./sections/LandingSection";
import Section from "./components/Section";
import BackgroundSection from "./sections/BackgroundSection";
import ResultSection from "./sections/ResultSection";
import Feedback from "./sections/Feedback";
import ReflectionSection from "./sections/ReflectionSection";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <LandingSection />
        <BackgroundSection />
        <ResultSection />
        <ReflectionSection />
      </main>
      <footer>
        <Feedback />
      </footer>
    </div>
  );
}

export default App;
