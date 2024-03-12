import { ABOUT_US_URL } from "../../utlis/contants";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat from Food<span>ify</span> healthy meal"
        </h4>
      </div>
      <div className="about-right">
        <img className="AboutUS" alt="AboutUS-Image" src={ABOUT_US_URL} />
      </div>
    </div>
  );
};

export default About;
