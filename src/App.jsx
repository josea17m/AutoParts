import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      
      <Header />
      <Navbar />
      <MainContent
        producto={[
          { image: "amortiguadores.jpg", alt: "amortiguadores", url: "/f" },
          { image: "herramientas.jpg", alt: "herramientas", url: "/e" },
          { image: "direccion.jpg", alt: "direccion", url: "/d" },
          { image: "limpieza.jpg", alt: "limpieza", url: "/c" },
          { image: "imagen random sin sentido.jpg", alt: "imagen random sin sentido", url: "/b" },
          { image: "imagen random sin sentido 2.jpg", alt: "imagen random sin sentido 2", url: "/a" },
        ]}
      />
      <Footer />
    </>
  );
}

export default App;
