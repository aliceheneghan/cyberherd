import React, { createContext, useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

const Context = createContext(false); // creates a context instance.

const ContextProvider = (props) => {
  const loginSession = JSON.parse(localStorage.getItem('login')) || {
    loggedIn: false,
    userID: null,
  };
  // we saved the state on our application.
  const [loggedIn, setLoggedIn] = useState(loginSession['loggedIn']);
  // useLocalStorage libraries to make sure the state of userData is being kept
  const [userData, setUserData] = useLocalStorage({});

  // searchbar context api
  const [search, setSearch] = useState('');

  // filter context
  const [resultData, setResultData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilterGenre, setActiveFilterGenre] = useState([]);
  const [activeFilterNeighborhood, setActiveFilterNeighborhood] = useState([]);
  const [activeFilterVenueType, setActiveFilterVenueType] = useState([]);

  // save the user ID
  const [userID, setUserID] = useState(loginSession['userID']);

  useEffect(() => {
    localStorage.setItem(
      'login',
      JSON.stringify({ loggedIn: loggedIn, userID: userID, userData: userData })
    );
  }, [loggedIn, userID, userData]);

  return (
    <Context.Provider
      value={{
        loggedIn,
        setLoggedIn,
        userData,
        setUserData,
        userID,
        setUserID,
        search,
        setSearch,
        resultData,
        setResultData,
        filteredData,
        setFilteredData,
        activeFilterGenre,
        setActiveFilterGenre,
        activeFilterNeighborhood,
        setActiveFilterNeighborhood,
        activeFilterVenueType,
        setActiveFilterVenueType,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
