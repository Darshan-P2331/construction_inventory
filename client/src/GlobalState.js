import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [workers, setWorkers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [constructionSites, setConstructionSites] = useState([]);
  const [requests, setRequests] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const login = localStorage.getItem("dbmsLogin");
    if (login) {
      setUser(JSON.parse(login));
      setIsAdmin(user.isAdmin ? true : false);
      setIsLoggedIn(true);
    }
    const getConstructionSites = async () => {
      const res = await axios.get("http://localhost:5000/constructions/");
      setConstructionSites(res.data);
    };
    getConstructionSites();

    const fetchWorkers = async () => {
      const res = await axios.get("http://localhost:5000/workers/");
      setWorkers(res.data);
    };
    fetchWorkers();
  }, [user.isAdmin]);

  const state = {
    user: [user, setUser],
    constructions: [constructionSites, setConstructionSites],
    requests: [requests, setRequests],
    transactions: [transactions, setTransactions],
    workers: [workers, setWorkers],
    isAdmin: [isAdmin, setIsAdmin],
    isLoggedIn: [isLoggedIn, setIsLoggedIn],
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
