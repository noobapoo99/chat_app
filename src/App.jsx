//import Navbar from "./components/Navbar.jsx";
//import React from "react";
//import Login from "./components/Login.jsx";
//import "./layout.scss";

import { useEffect } from "react";
import Chat from "./components/chat/Chat.jsx";
import Detail from "./components/detail/Detail.jsx";
import List from "./components/list/List.jsx";
import Login_1 from "./components/Login_1/login_1.jsx";
import Notification from "./components/notification/notification.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase.js";
//import Notification from "./components/notification/notification.jsx";
//import Notification from "./components/notification/notification.jsx";
//import HomePage from "./components/HomePage.jsx";

const App = () => {
  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
    return () => {
      unSub();
    };
  }, []);
  return (
    <div className="container_1">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login_1 />
      )}
      <Notification />
    </div>
  );
};

export default App;
