import "./AlphabetWall.css";

export default function AlphabetWall() {
  return (
    <div className="st-wall">
      {/* Example content: you can replace this with your actual wall letters */}
      <div className="st-cell" style={{ top: 60, left: 60 }}>
        A
      </div>
      <div className="st-cell" style={{ top: 60, left: 140 }}>
        B
      </div>
      <div className="st-cell" style={{ top: 60, left: 220 }}>
        C
      </div>
      <div className="st-cell" style={{ top: 140, left: 60 }}>
        D
      </div>
      <div className="st-cell" style={{ top: 140, left: 140 }}>
        E
      </div>
      <div className="st-cell" style={{ top: 140, left: 220 }}>
        F
      </div>
      {/* Add more .st-cell divs as needed for your wall */}
    </div>
  );
}
// Removed by user request
