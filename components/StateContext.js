import React, { useState, createContext } from "react";

export const StateContext = createContext(false);

export const StateProvider = (props) => {
  const [online, setOnline] = useState(true);

  return (
    <StateContext.Provider value={[online, setOnline]}>
      {props.children}
    </StateContext.Provider>
  );
};
