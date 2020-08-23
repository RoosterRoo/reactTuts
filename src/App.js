import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt me"),
  //     React.createElement(Pet, {
  //       name: "Scooby",
  //       animal: "Dog",
  //       breed: "Doberman",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Mickey",
  //       animal: "Mouse",
  //       breed: "Black Mouse",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Bugs",
  //       animal: "Bunny",
  //       breed: "Grey Rabbit",
  //     }),
  //   ]);
  // };

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Scooby" animal="Dog" breed="Doberman" />
      <Pet name="Mickey" animal="Mouse" breed="Black Mouse" />
      <Pet name="Bugs" animal="Bunny" breed="Grey Rabbit" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
