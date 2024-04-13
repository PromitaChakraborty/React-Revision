import { ABOUT_US_URL } from "../../utlis/contants";
import User from "./User";
import Userclass from "./Userclass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Consructor");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about-container">
        <div className="about-left">
          {/* <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat from Food<span>ify</span> healthy
            meal"
          </h4> */}
          <Userclass
            name={"Promita Chakraborty(Class)"}
            location={"Kolkata(class)"}
          />
          {/* <Userclass
            name={"Prasun Chakraborty(Class)"}
            location={"Telengana(class)"}
          /> */}
        </div>
      </div>
    );
  }
}

export default About;
