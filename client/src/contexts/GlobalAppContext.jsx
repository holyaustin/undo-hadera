import { createContext, useState } from "react";

const defaultValue = {
  metamaskAccountAddress: '',
  setMetamaskAccountAddress: (newValue) => { },
}

export const GlobalAppContext = createContext(defaultValue)

export const GlobalAppContextProvider = (props) => {
  const [metamaskAccountAddress, setMetamaskAccountAddress] = useState('')

  return (
    <GlobalAppContext.Provider
      value={{
        metamaskAccountAddress,
        setMetamaskAccountAddress
      }}
    >
      {props.children}
    </GlobalAppContext.Provider>
  )
}
