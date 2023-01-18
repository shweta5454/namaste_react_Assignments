import React from "react";
import ReactDOM from "react-dom/client";
//in html
{
  /* <div id="container">
  <h1>Namaste everyone i am from react</h1>
  <h1>Heading1 from React</h1>
  <h1>Heading2 from React</h1>
</div> */
}
const heading = React.createElement(
  "h1",
  {},
  "Namaste everyone i am created from react library"
);
console.log(heading);
//type,properties or attribute,children
const heading1 = React.createElement("h1", {}, "Heading1 from Parcel");
const heading2 = React.createElement("h2", {}, "Heading2 from React");
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
