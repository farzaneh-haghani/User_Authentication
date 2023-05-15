import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="/images/Farzaneh-designstyle-friday-m.png" alt="Farzaneh" />
      </Link>
    </div>
  );
};

export default Header;
