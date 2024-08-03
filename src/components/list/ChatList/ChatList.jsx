import AddUser from "../addUser/addUser";
import "./chatList.css";
import { useState } from "react";
const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input
            type="text"
            placeholder="Search"
            /* onChange={(e) => setInput(e.target.value)} */
          />
        </div>
        <img
          // src="./plus.png"
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div
        className="item"
        /* key={chat.chatId}
          onClick={() => handleSelect(chat)}
          style={{
            backgroundColor: chat?.isSeen ? "transparent" : "#5183fe",
          }} */
      >
        <img
          src="./avatar.png"
          /* src={
              chat.user.blocked.includes(currentUser.id)
                ? "./avatar.png"
                : chat.user.avatar || "./avatar.png"
            } */
          alt=""
        />
        <div className="texts">
          <span>
            John
            {/* {chat.user.blocked.includes(currentUser.id)
              ? "User"
              : chat.user.username} */}
          </span>
          <p>hello</p>
          {/*  <p>{chat.lastMessage}</p> */}
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
