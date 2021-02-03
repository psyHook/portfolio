import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="App">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 5,
              out_mode: "out",
            },
            shape: {
              type: ["image", "circle"],
              image: [
                {
                  src: `${Logo}`,
                  height: 80,
                  width: 80,
                },
                {
                  src: `${Logo}`,
                  height: 80,
                  width: 80,
                },
                {
                  src: `${Logo}`,
                  height: 80,
                  width: 80,
                },
              ],
            },
            color: {
              value: "#CCC",
            },
            size: {
              value: 40,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
