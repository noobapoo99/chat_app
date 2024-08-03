//import Navbar from "./components/Navbar.jsx";
//import React from "react";
//import Login from "./components/Login.jsx";
//import "./layout.scss";

import Chat from "./components/chat/Chat.jsx";
import Detail from "./components/detail/Detail.jsx";
import List from "./components/list/List.jsx";
import Login_1 from "./components/Login_1/login_1.jsx";
import Notification from "./components/notification/notification.jsx";
//import Notification from "./components/notification/notification.jsx";
//import Notification from "./components/notification/notification.jsx";
//import HomePage from "./components/HomePage.jsx";

function App() {
  const user = true;
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
}

export default App;
