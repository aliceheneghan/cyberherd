import React, { createContext, useState } from 'react';

const Context = createContext(false);

const ContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Context.Provider value={{ loggedIn, setLoggedIn}} >
      {props.children}
    </Context.Provider>
  )
};

export { Context, ContextProvider };