import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const count = 4;
  return (
    <div>
      <h1>
        <span className="title">WebDev</span>News
      </h1>
      <style jsx>
        {`
          .title {
            color: ${count > 5 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
