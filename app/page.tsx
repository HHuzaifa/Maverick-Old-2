import About from "./About/page";
import Portfolio from "./Portfolio/page";
import Services from "./Services/page";
import Skills from "./Skills/page";


export default function Home() {
  return (
    <main>
      <About />
      <Skills />
      <Services />
      <Portfolio />
    </main>
  )
}
