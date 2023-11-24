import About from "../../components/About";
import Banner from "../../components/Banner";
import Stats from "../../components/Stats";
import "./index.scss";

function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Stats />
    </main>
  );
}

export default Home;
