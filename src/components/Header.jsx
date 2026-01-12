import React from "react";

import Footer from "./Footer";

function Header({ onNavigate }) {
  return (
    <header className="modern-header expose-animate">
      <Footer onNavigate={onNavigate} onlyNav={true} />
    </header>
  );
}

export default Header;
