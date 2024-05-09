/* eslint-disable react/prop-types */
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const baseURL = import.meta.env.VITE_SERVER_URL || "http://localhost:5005";

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [draftOrder, setDraftOrder] = useState(null);

  const authenticateUser = () => {
    //  <==  ADD
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      console.log("storedToken: ", storedToken);
      //why i'm getting here undefined????????????
      // .get(`${import.meta.env.SERVER_URL}/auth/verify`, {

      return axios
        .get(`${baseURL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          console.log(
            "import.meta.env.SERVER_URL",
            import.meta.env.VITE_SERVER_URL
          );
          // If the server verifies that the JWT token is valid
          const userInfo = response.data;
          // Update state variables
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(userInfo);
          console.log("user: ", userInfo);
          setIsAdmin(userInfo.isAdmin);
          setDraftOrder(userInfo.draftOrder);
        })
        .catch((error) => {
          // If the server sends an error response (invalid token)
          // Update state variables
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          setIsAdmin(false);
          setDraftOrder(null);
        });
    } else {
      // If the token is not available (or is removed)
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
      setIsAdmin(false);
      setDraftOrder(null);
    }
  };

  function logOutUser() {
    localStorage.removeItem("authToken");

    authenticateUser();
  }

  useEffect(() => {
    console.log("Verifies the token initially");
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        isAdmin,
        draftOrder,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
