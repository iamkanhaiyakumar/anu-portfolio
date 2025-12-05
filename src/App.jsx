import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Achievements } from "./components/Achievements/Achievements";
import { Skills } from "./components/Skills/Skills";

// New Sections Added ↓↓↓
import { Education } from "./components/Education/Education";
import { Certificates } from "./components/Certificates/Certificates";
// import { Footer } from "./components/Footer/Footer";

import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { WhatsAppButton } from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Achievements />

      {/* New Sections Added */}

      <Contact />
      <ScrollToTop />
      <WhatsAppButton />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
