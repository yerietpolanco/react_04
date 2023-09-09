import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <>
      <div className="d-flex app-container justify-content-center align-items-center flex-column">
        <h1>Cartelera de peliculas</h1>
        <Buscador setFilter={setFilter} />
        <MiApi filter={filter} />
      </div>
    </>
  );
}

export default App;
