import "./HomePage.scss";
import Login from "./Login.jsx";
//import Notification from "./components/notification/notification.jsx";
import videoBg from "../assets/video2.mp4";
function HomePage() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video className="bg-video" src={videoBg} autoPlay loop muted></video>
      <div className="content">
        <Login />
      </div>
    </div>
  );
}

export default HomePage;
