export default function Portal({ x, y }) {
  return (
    <div
      className="portal-container open"
      style={{
        left: x,
        top: y,
      }}
    >
      <svg
        className="crack-svg"
        viewBox="0 0 300 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* CORE FRACTURE */}
        <path
          d="
            M150 0
            L130 70
            L165 140
            L120 220
            L180 300
            L110 380
            L190 460
            L150 600
          "
          className="crack-core"
        />

        {/* INNER GLOW */}
        <path
          d="
            M150 0
            L135 70
            L160 140
            L130 220
            L170 300
            L125 380
            L175 460
            L150 600
          "
          className="crack-glow"
        />

        {/* BRANCHES */}
        <path d="M150 160 L60 120" className="crack-branch" />
        <path d="M150 200 L230 170" className="crack-branch" />
        <path d="M140 280 L70 320" className="crack-branch" />
        <path d="M160 360 L240 400" className="crack-branch" />
        <path d="M150 440 L90 520" className="crack-branch" />
      </svg>

      {/* LAVA CORE */}
      <div className="lava-core" />
    </div>
  );
}
