import { useState } from "react";
import "./login_1.css";
import { toast } from "react-toastify";
const Login_1 = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    toast.error("Hello");
  };

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <div className="login">
      <div className="item">
        <h2>welcome back</h2>

        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>sign in</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>

        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login_1;
