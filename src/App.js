
import { useState } from "react";
import Home from "./components/Home/Home";
import AlphabetWall from "./components/AlphabetWall/AlphabetWall";

function App() {
  const [entered, setEntered] = useState(false);

  return entered ? (
    <AlphabetWall />
  ) : (
    <Home onEnter={() => setEntered(true)} />
  );
}

export default App;
