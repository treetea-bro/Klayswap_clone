import { createContext, useState } from "react";

export const SwapContext = createContext();

const SwapProvider = ({ children }) => {
  const [myAddress, setMyAddress] = useState();
  const [myKlayAmount, setMyKlayAmount] = useState(0);
  const [myOEthAmount, setMyOEthAmount] = useState(0);
  const [klay, setKlay] = useState(0);
  const [resultEthAmount, setResultEthAmount] = useState(0);

  const value = {
    myAddress,
    setMyAddress,
    myKlayAmount,
    setMyKlayAmount,
    myOEthAmount,
    setMyOEthAmount,
    resultEthAmount,
    setResultEthAmount,
    klay,
    setKlay,
  };
  return <SwapContext.Provider value={value}>{children}</SwapContext.Provider>;
};

export default SwapProvider;
