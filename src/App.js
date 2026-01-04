
import { useState } from "react";
import Home from "./components/Home/Home";



const bgStyle = {
  minHeight: "100vh",
  width: "100vw",
  background: "linear-gradient(rgba(0,0,0,0.7), rgba(30,0,0,0.7))",
};

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div style={bgStyle}>
      {entered ? (
        <div style={{textAlign: 'center', marginTop: '100px', fontSize: '2rem', color: '#ff1a1a'}}>Welcome to the Upside Down!</div>
      ) : (
        <Home onEnter={() => setEntered(true)} />
      )}
    </div>
  );
}

export default App;
