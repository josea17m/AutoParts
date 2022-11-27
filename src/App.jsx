import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import RenderProducto from "./components/RenderProduct";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <MainContent
              productos={[
                {
                  image: "amortiguadores.jpg",
                  alt: "amortiguadores",
                  url: "/1",
                },
                { image: "herramientas.jpg", alt: "herramientas", url: "/2" },
                { image: "direccion.jpg", alt: "direccion", url: "/3" },
                { image: "limpieza.jpg", alt: "limpieza", url: "/4" },
                {
                  image: "imagen random sin sentido.jpg",
                  alt: "imagen random sin sentido",
                  url: "/5",
                },
                {
                  image: "imagen random sin sentido 2.jpg",
                  alt: "imagen random sin sentido 2",
                  url: "/6",
                },
              ]}
            />
          }
        />

        <Route
          path="/1"
          element={<RenderProducto numero={[1, 2, 3, 4, 5, 6]} />}
        />
        <Route
          path="/2"
          element={<RenderProducto numero={[1, 2, 3, 4, 5, 6]} />}
        />
        <Route
          path="/3"
          element={<RenderProducto numero={[1, 2, 3, 4, 5, 6]} />}
        />
        <Route
          path="/4"
          element={<RenderProducto numero={[1, 2, 3, 4, 5, 6]} />}
        />
        <Route
          path="/5"
          element={<RenderProducto numero={[1, 2, 3, 4, 5, 6]} />}
        />
        <Route
          path="/6"
          element={<RenderProducto numero={[1, 2, 3, 4, 5, 6]} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
