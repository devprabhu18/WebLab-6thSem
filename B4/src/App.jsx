import React from "react";
import CustomList from "./customList";
import "./App.css"

const App=()=>{
  const animals=['dog','cat','cow','donkey','toger'];
  return(
    <div className="app">
        <h1>Animal List</h1>
        <CustomList items={animals}/>
    </div>
  )
}
export default App;