import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);

    console.log("Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        login: "Dummy",

        bio: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/promitachakraborty");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);

    console.log("Child ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("Child CoponentDidUpdate");
  }

  componentWillUnmount() {
    console.log(" Child componentWillUnmount");
  }
  render() {
    console.log("Child Render");
    const { name, login, bio } = this.state.userInfo;

    return (
      <div className="Class-Component">
        <h2>Name:{name}</h2>
        <h2>Contact:{login}</h2>
        <h3>Location:India</h3>
        <h3>Bio:{bio}</h3>

        <h3></h3>
      </div>
    );
  }
}

export default Userclass;
