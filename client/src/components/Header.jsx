import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <TextDropdown text="HELP" />
      <Network />
      <TextDropdown text="KO" />
    </div>
  );
};

const TextDropdown = (props) => {
  return (
    <div>
      <span className="text bold">{props.text}</span>
      <span>
        <img
          src="https://klayswap.com/img/icon/ic-chevron-bottom-disable-gray.svg"
          alt="chevron"
        />
      </span>
    </div>
  );
};

const Network = () => {
  return (
    <div className="network">
      <span className="ic-status pointer green"></span>
      <span className="text bold">mainnet</span>
      <span className="green sharp bold">#</span>
      <span className="text2">98,203,572</span>
    </div>
  );
};

export default Header;
