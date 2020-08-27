import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      {/* <Pet name="Scooby" animal="Dog" breed="Doberman" />
      <Pet name="Mickey" animal="Mouse" breed="Black Mouse" />
      <Pet name="Bugs" animal="Bunny" breed="Grey Rabbit" /> */}
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
