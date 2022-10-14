import CharacterList from "./components/CharacterList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Episodes from "./components/Episodes";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";
import CharacterDetail from "./components/CharacterDetail";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
