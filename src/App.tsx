import CharacterList from "./components/CharacterList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Episodes from "./components/Episodes";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;
