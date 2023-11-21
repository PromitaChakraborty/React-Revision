import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "Hiiii Promita"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
