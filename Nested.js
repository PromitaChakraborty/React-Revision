import React from "react";
import ReactDOM from "react-dom/client";

//Element in React
const heading = <h3 className="head">Namaste React By JSX Element</h3>;

//Components in React
const Title = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>;
};
const num = 100000;

//Component Composition in React
const HeadingJSX = () => (
  <div id="container">
    <h4>{num}</h4>
    {heading}
    <Title />
    {Title()}
    <Title></Title>
    <h2>Namaste React Class Based Component</h2>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingJSX />);
