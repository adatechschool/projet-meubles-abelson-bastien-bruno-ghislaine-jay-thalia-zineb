import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
// import BoutonAchat from "./components/BoutonAchat";
// import BoutonSuppr from "./components/BoutonSuppr";
import Accueil from "./pages/Accueil";
import Admin from "./pages/Admin";
import Apropos from "./pages/Apropos";
import DetailsProduit from "./pages/DetailsProduit";
import Panier from "./pages/Panier";
import Login from "./pages/Login";

// import BarreNav from "./components/BarreNav";

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Accueil/>}/>
      <Route path="/detailsproduit" element={<DetailsProduit/>}/>
      <Route path="/apropos" element={<Apropos/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/panier" element={<Panier/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes> 
    </BrowserRouter>

  );
}

export default App;