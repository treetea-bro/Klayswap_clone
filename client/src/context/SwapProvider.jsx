import { createContext, useState } from "react";

export const SwapContext = createContext();

const SwapProvider = ({ children }) => {
  const [myAddress, setMyAddress] = useState();
  const [myKlayAmount, setMyKlayAmount] = useState(5);

  const value = { myAddress, setMyAddress, myKlayAmount, setMyKlayAmount };
  return <SwapContext.Provider value={value}>{children}</SwapContext.Provider>;
};

export default SwapProvider;
