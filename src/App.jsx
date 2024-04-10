import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
