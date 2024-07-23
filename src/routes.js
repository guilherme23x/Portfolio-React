import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Projetos from "./Pages/Projetos";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/projetos" element={<Projetos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;