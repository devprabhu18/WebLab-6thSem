import React from "react";

const Joke = ({ joke }) => {
  return (
    <div>
      <h4>{joke.setup}</h4>
      <p>{joke.punchline}</p>
    </div>
  );
};
export default Joke;