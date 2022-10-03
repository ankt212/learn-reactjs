import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} />
      </video>
      <div className="homepage-content">
        <div className="title-home-page">There's a better way to ask</div>
        <div className="content-home-page">
          You don't want to make a boring from. And your audience won't answer
          one. Create a typeform instead-and make everyone happy.
        </div>
        <div className="button-home-page">
          {isAuthenticated === false ? (
            <button onClick={() => navigate("/login")}>
              Get's started. It's free
            </button>
          ) : (
            <button onClick={() => navigate("/users")}>Doing quiz now</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
