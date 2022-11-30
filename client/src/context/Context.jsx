import React, { createContext, useState, useEffect } from 'react';

const Context = createContext(false); // creates a context instance.

const ContextProvider = (props) => {
  const loginSession = JSON.parse(localStorage.getItem('login')) || {
    loggedIn: false,
  };
  // we saved the state on our application.
  const [loggedIn, setLoggedIn] = useState(loginSession['loggedIn']);
  const [userData, setUserData] = useState({});

  const [userID, setUserID] = useState(''); // save the user ID.

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify({ loggedIn: loggedIn }));
  }, [loggedIn]);

  return (
    // Context.Provider component is used to provide the context to it's child components, no matter how deep they are.
    <Context.Provider
      value={{
        loggedIn,
        setLoggedIn,
        userData,
        setUserData,
        userID,
        setUserID,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
// all the components that'd like later to consume the context have to be wrapped inside the provider component. 
// if you want to change the context value, simply update the value prop.

export { Context, ContextProvider };