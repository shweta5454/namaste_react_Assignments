const heading = React.createElement(
  "h1",
  {},
  "Namaste everyone i am from react"
);
console.log(heading);
                                  //type,properties or attribute,children
const heading1 = React.createElement("h1", {}, "Heading1 from React");
const heading2 = React.createElement("h2", {}, "Heading2 from React");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); 