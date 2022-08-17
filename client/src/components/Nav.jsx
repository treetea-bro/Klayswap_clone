import React, { useContext, useEffect } from "react";
import { SwapContext } from "../context/SwapProvider";
import "./Nav.css";
import tokenABI from "../abi/tokenABI";

const oETH_CA = "0x34d21b1e550d73cee41151c77f3c73359527a396";

const Nav = () => {
  const { myAddress, setMyAddress, setMyKlayAmount, setMyOEthAmount } =
    useContext(SwapContext);

  const connectWallet = async () => {
    if (!window.klaytn) alert("카이카스 지갑을 설치해주세요!");
    const [address] = await window.klaytn.enable();
    sessionStorage.setItem("address", address);
    setMyAddress(address);

    const klayAmount = await window.caver.klay.getBalance(myAddress);
    setMyKlayAmount(klayAmount / 1e18);

    const oEthContract = new window.caver.klay.Contract(tokenABI, oETH_CA);
    const oETHBalance = await oEthContract.methods.balanceOf(myAddress).call();
    const decimals = await oEthContract.methods.decimals().call();
    setMyOEthAmount(oETHBalance / 10 ** decimals);
  };

  useEffect(() => {
    (async () => {
      const address = sessionStorage.getItem("address");
      if (address) {
        setMyAddress(address);

        const klayAmount = await window.caver.klay.getBalance(address);
        setMyKlayAmount(klayAmount / 1e18);

        const oEthContract = new window.caver.klay.Contract(tokenABI, oETH_CA);
        const oETHBalance = await oEthContract.methods
          .balanceOf(address)
          .call();
        const decimals = await oEthContract.methods.decimals().call();
        setMyOEthAmount(oETHBalance / 10 ** decimals);
      }
    })();
  }, []);

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
        {myAddress ? (
          <div>{myAddress.substring(0, 16)}...</div>
        ) : (
          <button onClick={connectWallet}>지갑연결</button>
        )}
      </section>
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <article className="nav-item">
      <span>{props.text}</span>
      {props.isDropdown ? (
        <img
          src="https://klayswap.com/img/icon/ic-triangle-bottom-gray.svg"
          alt="img"
        />
      ) : (
        <></>
      )}
    </article>
  );
};

export default Nav;
