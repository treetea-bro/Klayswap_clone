import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <Title />
      <Ticket />
    </main>
  );
};

const Title = () => {
  return (
    <section>
      <span className="main-text">
        원하는 자산으로 바로 <span className="text-strong">교환(스왑)</span>
        하세요
      </span>
    </section>
  );
};

const Ticket = () => {
  return (
    <section className="ticket">
      <section>
        <KlayCardItem />
        <article className="change-icon">
          <img src="https://klayswap.com/img/icon/ic-target-swap.svg" />
        </article>
        <KEthCardItem />
      </section>
      <section>
        <span>Swap</span>
      </section>
    </section>
  );
};

const KlayCardItem = () => {
  return (
    <article className="card-item">
      <label>From</label>
      <article className="exchange">
        <input type="number" placeholder="0" />
        <img src="https://klayswap.com/img/icon/ic-drp-open-gray.svg" />
        <div className="token-img">
          <img src="https://s.klayswap.com/data/img/token/0x0000000000000000000000000000000000000000/icon.svg?v=1647939876203" />
        </div>
      </article>
      <article className="final-part">
        <span className="sub-text">
          <span>보유</span>
          <span>0</span>
        </span>
        <span className="sub-text2">KLAY</span>
      </article>
    </article>
  );
};

const KEthCardItem = () => {
  return (
    <article className="card-item">
      <label>To</label>
      <article className="exchange">
        <input type="number" placeholder="0" />
        <img src="https://klayswap.com/img/icon/ic-drp-open-gray.svg" />
        <div className="token-img">
          <img src="https://s.klayswap.com/data/img/token/0x34d21b1e550d73cee41151c77f3c73359527a396.svg" />
        </div>
      </article>
      <article className="final-part">
        <span className="sub-text">
          <span>보유</span>
          <span>0</span>
        </span>
        <span className="sub-text2">oETH</span>
      </article>
    </article>
  );
};

export default Main;
