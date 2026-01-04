import "./AlphabetWall.css";

const letters = [
  ["R", "B", "C", "D", "E", "F"],
  ["G", "U", "I", "J", "K", "L"],
  ["M", "A", "N", "P", "Q", "O"],
  ["S", "T", "H", "V", "W", "X"],
  ["Y", "Z", null, null, null, null],
];

export default function AlphabetWall({ activeLetters = [] }) {
  return (
    <div className="alphabet-wall">
      {letters.map((row, rowIdx) =>
        row.map((char, colIdx) => {
          if (!char) return null;
          return (
            <div key={rowIdx + "-" + colIdx} className="letter-wrap">
              <span
                className={`st-letter${
                  activeLetters.includes(char) ? " active" : ""
                }`}
              >
                {char}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
}
