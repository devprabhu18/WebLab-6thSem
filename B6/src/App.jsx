import React from 'react';
import JokeList from './JokeList';
const App=()=>{
    const jokes=[
      { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
      { setup: "Why did the chicken join a band?", punchline: "Because it had the drumsticks!" },
      { setup: "What do you call fake spaghetti?", punchline: "An impasta!" }
    ]

    return(
      <>
      <div>
        <h1>Jokes</h1>
        <JokeList jokes={jokes} />
      </div>
      </>
    )
}
export default App;