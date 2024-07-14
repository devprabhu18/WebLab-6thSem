import React from 'react';
import Joke from './Jokes';
const App=()=>{
    const jokes=[
      { id: 1, setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
      { id: 2, setup: "Why did the chicken join a band?", punchline: "Because it had the drumsticks!" },
      { id: 3, setup: "What do you call fake spaghetti?", punchline: "An impasta!" }
    ]

    return(
      <>
      <div>
        <h1>Jokes</h1>
        {jokes.map(joke=>(
          <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline}/>
        ))}
      </div>
      </>
    )
}
export default App;