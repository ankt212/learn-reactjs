import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} />
      </video>
      <div className="homepage-content">
        <div className="title-home-page">{t("description.part1")}</div>
        <div className="content-home-page">{t("description.part2")}</div>
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
