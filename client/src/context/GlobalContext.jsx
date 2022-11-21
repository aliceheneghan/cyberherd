import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ContextProvider value={{ loggedIn, setLoggedIn}} >
      {props.children}
    </ContextProvider>
  )
};

export { Context, ContextProvider };