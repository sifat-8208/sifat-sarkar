import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Works from "./components/Works";

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <Intro/>
      <About/>
      <Services/>
      <Works/>
      <Contact/>
    </main>
  );
}
