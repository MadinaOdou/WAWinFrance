import About from "../../components/About";
import Banner from "../../components/Banner";
import Benefits from "../../components/Benefits";
import Contact from "../../components/Contact";
import Events from "../../components/Events";
import Stats from "../../components/Stats";
import Subscribe from "../../components/Subscribe";
import Team from "../../components/Team";
import "./index.scss";

function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Stats />
      <Benefits />
      <Team />
      <Events />
      <Subscribe />
      <Contact />
    </main>
  );
}

export default Home;
