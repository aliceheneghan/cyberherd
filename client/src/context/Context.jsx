import React, { createContext, useState, useEffect } from 'react';

// creates a context instance.
const Context = createContext(false);

const ContextProvider = (props) => {
  const loginSession = JSON.parse(localStorage.getItem('login')) || {
    loggedIn: false,
    userID: null
  };
  // we saved the state on our application.
  const [loggedIn, setLoggedIn] = useState(loginSession['loggedIn']);
  const [userData, setUserData] = useState({});

  // save the user ID
  const [userID, setUserID] = useState(loginSession['userID']);

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify({ loggedIn: loggedIn, userID: userID }));
  }, [loggedIn, userID]);

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

// what's important here is that all the components that'd like later to consume the context have to be wrapped inside the provider component. If you want to change the context value, simply update the value prop.

export { Context, ContextProvider };
