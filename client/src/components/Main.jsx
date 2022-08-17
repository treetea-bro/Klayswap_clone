import React, { useContext } from "react";
import exchangeABI from "../abi/exchangeABI";
import swapABI from "../abi/swapABI";
import { SwapContext } from "../context/SwapProvider";
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

const oETH_CA = "0x34d21b1e550d73cee41151c77f3c73359527a396";
const FACTORY_CA = "0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654";
const Ticket = () => {
  const { klay, myAddress } = useContext(SwapContext);
  const swap = async () => {
    const contract = new window.caver.klay.Contract(swapABI, FACTORY_CA);
    const value = klay * 1e18;

    contract.methods
      .exchangeKlayPos(oETH_CA, 1, [])
      .send({
        from: myAddress,
        gas: 1e7,
        value: value.toString(),
      })
      .catch((e) => {
        alert(e);
        window.location.reload();
      });
  };

  return (
    <section className="ticket">
      <section>
        <KlayCardItem />
        <article className="change-icon">
          <img
            src="https://klayswap.com/img/icon/ic-target-swap.svg"
            alt="img"
          />
        </article>
        <OEthCardItem />
      </section>
      <section onClick={swap}>
        <span>Swap</span>
      </section>
    </section>
  );
};

const KLAY_OETH_CA = "0x27f80731dddb90c51cd934e9bd54bff2d4e99e8a";
const KlayCardItem = () => {
  const { myKlayAmount, setResultEthAmount, setKlay } = useContext(SwapContext);
  const _onChange = async (e) => {
    const klayAmount = e.target.value;
    const contract = new window.caver.klay.Contract(exchangeABI, KLAY_OETH_CA);
    const pool = await contract.methods.getCurrentPool().call();
    const ratio = pool[1] / pool[0];
    const ethAmount = klayAmount * ratio;
    setResultEthAmount(ethAmount);
    setKlay(klayAmount);
  };
  return (
    <article className="card-item">
      <label>From</label>
      <article className="exchange">
        <input type="number" placeholder="0" onChange={_onChange} />
        <img
          src="https://klayswap.com/img/icon/ic-drp-open-gray.svg"
          alt="img"
        />
        <div className="token-img">
          <img
            src="https://s.klayswap.com/data/img/token/0x0000000000000000000000000000000000000000/icon.svg?v=1647939876203"
            alt="img"
          />
        </div>
      </article>
      <article className="final-part">
        <span className="sub-text">
          <span>보유</span>
          <span>{myKlayAmount ? myKlayAmount : 0}</span>
        </span>
        <span className="sub-text2">KLAY</span>
      </article>
    </article>
  );
};

const OEthCardItem = () => {
  const { myOEthAmount, resultEthAmount } = useContext(SwapContext);
  return (
    <article className="card-item">
      <label>To</label>
      <article className="exchange">
        <input type="number" placeholder="0" value={resultEthAmount} readOnly />
        <img
          src="https://klayswap.com/img/icon/ic-drp-open-gray.svg"
          alt="img"
        />
        <div className="token-img">
          <img
            src="https://s.klayswap.com/data/img/token/0x34d21b1e550d73cee41151c77f3c73359527a396.svg"
            alt="img"
          />
        </div>
      </article>
      <article className="final-part">
        <span className="sub-text">
          <span>보유</span>
          <span>{myOEthAmount ? myOEthAmount : 0}</span>
        </span>
        <span className="sub-text2">oETH</span>
      </article>
    </article>
  );
};

export default Main;
