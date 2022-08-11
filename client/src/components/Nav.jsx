import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <section className="home">
        <article>
          <img src="https://klayswap.com/img/logo/logo.svg" alt="main logo" />
        </article>
        <article>KLAYswap</article>
      </section>
      <section className="nav-items">
        <NavItem text="내자산" />
        <NavItem text="스왑" />
        <NavItem text="예치" isDropdown={true} />
        <NavItem text="KSP거버넌스" isDropdown={true} />
        <NavItem text="Drops" />
        <NavItem text="대시보드" />
      </section>
      <section className="nav-btn">
        <button>지갑연결</button>
      </section>
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <article className="nav-item">
      <span>{props.text}</span>
      {props.isDropdown ? (
        <img src="https://klayswap.com/img/icon/ic-triangle-bottom-gray.svg" />
      ) : (
        <></>
      )}
    </article>
  );
};

export default Nav;
