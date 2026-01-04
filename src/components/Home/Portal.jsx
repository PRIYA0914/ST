export default function Portal({ open }) {
  return (
    <div className={`portal-container ${open ? "open" : ""}`}>
      <svg
        className="crack-svg"
        viewBox="0 0 200 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* MAIN CRACK LEFT */}
        <path
          d="M100 0 L90 60 L105 120 L85 180 L110 240 L80 300 L100 360 L90 420 L100 500"
          className="crack crack-left"
        />

        {/* MAIN CRACK RIGHT */}
        <path
          d="M100 0 L110 60 L95 120 L115 180 L90 240 L120 300 L100 360 L110 420 L100 500"
          className="crack crack-right"
        />

        {/* BRANCHES */}
        <path d="M95 140 L50 110" className="branch" />
        <path d="M105 180 L160 150" className="branch" />
        <path d="M90 260 L40 300" className="branch" />
        <path d="M110 320 L165 360" className="branch" />
        <path d="M100 420 L60 460" className="branch" />
      </svg>

      {/* ENERGY CORE */}
      <div className="portal-energy" />
    </div>
  );
}
