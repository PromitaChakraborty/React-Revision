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
      <div className="container  px-4 py-8">
        <div className="flex justify-center items-center m-10 ">
          <img
            className="rounded-2xl  transform hover:scale-110 pulse transition-transform duration-500 ease-in-out"
            alt="AboutUS-Image"
            src={ABOUT_US_URL}
          />
        </div>
        <div>
          <h1 className="font-bold text-center text-2xl">
            Welcome to The world of
            <span className="text-3xl font-bold text-orange-400 mr-2 ml-2 ">
              Tasty & Fresh Food
            </span>
            <span className="transition-all duration-300 ease-in-out hover:text-blue-500">
              "Better you will feel if you eat from Foodify healthy meal"
            </span>
          </h1>
        </div>

        <div className="">
          <h1 className="text-2xl text-center transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
            OUR MOTTO
          </h1>
          <ul className="  text-black  font-serif text-2xl text-center bg-gray-200 hover:bg-blue-200 transition-color duration-300 ease-in-out">
            <li>Quality</li>
            <li>Customer Satisfaction</li>
            <li>Transparency</li>
          </ul>
        </div>
        <div className="w-64 h-64 bg-gradient-to-b from-blue-500 to-pink-500 rounded-lg  font-serif text-xl m-10 justify-items-center">
          <Userclass
            name={"Promita Chakraborty(Class)"}
            location={"Kolkata(class)"}
          />
        </div>
      </div>
    );
  }
}

export default About;
