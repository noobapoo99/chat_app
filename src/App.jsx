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
import { useUserStore } from "./lib/userStore.js";
//import Notification from "./components/notification/notification.jsx";
//import Notification from "./components/notification/notification.jsx";
//import HomePage from "./components/HomePage.jsx";

const App = () => {
  // const user = false;
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  //console.log(currentUser);

  if (isLoading) return <div className="Loading">Loading..</div>;

  return (
    <div className="container_1">
      {currentUser ? (
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
