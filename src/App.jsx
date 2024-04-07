import "./App.css";

// Je renomme BrowserRouter en Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des Pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Favorites from "./pages/Favorites";

//import des composants
import Header from "./components/Header";

//import images
import marvelLogo from "./assets/imgs/logo-marvel.png";
import bannerMarvel from "./assets/imgs/banner-marvel.jpg";
import comicsMarvel from "./assets/imgs/comics-marvel.jpeg";

function App() {
  return (
    // Router doit contenir tout mon site
    <Router>
      {/* Mon Header apparait sur toutes les pages */}
      <Header marvelLogo={marvelLogo} />
      {/* Le composant Routes doit contenir toutes mes routes, il affiche un seul de ses enfants à la fois */}
      <Routes>
        {/* path=chemin element=le composant à afficher si l'url correspond au chemin */}
        <Route
          path="/"
          element={
            <Home bannerMarvel={bannerMarvel} comicsMarvel={comicsMarvel} />
          }
        />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comic/:id" element={<Comic />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
    </Router>
  );
}

export default App;
