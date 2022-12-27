import React, { useState, useEffect } from "react";
const CustomerContext = React.createContext();

function CustomerProvider({ children }) {
  const [customer, setCustomer] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data);
        data.error ? setLoggedIn(false) : setLoggedIn(true);
      });
  }, []);

  const login = (customer) => {
    setCustomer(customer);
    setLoggedIn(true);
  };

  const logout = () => {
    setCustomer({});
    setLoggedIn(false);
  };

  const signup = (customer) => {
    setCustomer(customer);
    setLoggedIn(true);
  };

  return (
    <CustomerContext.Provider
      value={{
        customer,
        login,
        logout,
        signup,
        loggedIn,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export { CustomerContext, CustomerProvider };
