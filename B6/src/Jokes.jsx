import React from 'react';
const Joke=({setup,punchline})=>{
    return(
        <div>
            <h3>{setup}</h3>
            <p>{punchline}</p>
        </div>
    );
};
export default Joke;