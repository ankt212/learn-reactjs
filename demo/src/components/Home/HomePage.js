import videoHomePage from "../../assets/video-homepage.mp4";
const HomePage = (props) => {
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
          <button>Get's started. It's free</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
