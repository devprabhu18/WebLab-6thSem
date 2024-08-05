
import React from 'react';
import CustomList from './customList';
import './App.css'
function App(){
  const animals=['tiger','lion','giraffe','monkey'];
  return(
    <div>
      <h2>Animal List</h2>
      <CustomList items={animals}/>
    </div>
  );

}
export default App;