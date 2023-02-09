import Header from "./components/Header";
import Landing from "./components/Landing";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SKills from "./components/Skills";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <section id="section-gradient-color">
          <Education />
          <Experience />
          <Projects />
          <SKills />
      </section>
      <Footer />
    </div>
  );
}

export default App;
