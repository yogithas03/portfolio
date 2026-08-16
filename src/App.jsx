
import Header from "./components/Header";
import Greeting from "./containers/Greeting";
import Skills from "./containers/Skills";
import StackProgress from "./containers/StackProgress";
import Education from "./containers/Education";
import WorkExperience from "./containers/WorkExperience";
import Projects from "./containers/Projects";
import StartupProject from "./containers/StartupProjects";
import Profile from "./containers/Profile";
import Achievement from "./containers/Achievement";
import SplashCursor from "./components/SplashCursor";

import Top from "./components/TopButton";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <SplashCursor 
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING={true}
        RAINBOW_MODE={false}
        COLOR="#00b8db"
      />
      <div className="bg-[#edf9fe] dark:bg-[#171c28] min-h-screen text-[#868e96] transition-colors duration-300 font-sans">
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Projects />
        <StartupProject />
        <Achievement />
        <Profile />

        <Top />
      </div>
    </ThemeProvider>
  );
};

export default App;
