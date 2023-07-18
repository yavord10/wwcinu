import React from "react";

import "./header.scss";

import logo from "../../assets/images/worldcupinutransparent.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header__nav">
          <li>
            <a href="https://twitter.com/WWCUPINU">Twitter</a>
          </li>
          <li>
            <a href="https://t.me/WomensWCI">Telegram</a>
          </li>
          <li>
            <a href="https://etherscan.io/address/0xef9B378Aa82787331f879D3D421974F1792E6866">
              Etherscan
            </a>
          </li>
          <li>
            <a href="mailto:womensworldcupinu@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
