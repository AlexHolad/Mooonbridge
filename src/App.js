import React, { useState } from "react";
import "./App.css";
import MobileMenu from "./components/MobileMenu";

import NavMobile from "./components/NavMobile";

function App() {
  const [menu, setMenu] = useState(false);
  const menuToggler = () => {
    setMenu(!menu);
  };
  return (
    <div className="App">
      {menu && <MobileMenu menu={menu} menuToggler={menuToggler} />}
      <NavMobile menuToggler={menuToggler} />
    </div>
  );
}

export default App;
