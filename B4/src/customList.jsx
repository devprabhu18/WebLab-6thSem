
import React from 'react';
function CustomList({items}){
   return(
    <div>
        {items.map((item,index)=>(
            <div key={index}> {item} </div>
        ))}
    </div>

   );

}
export default CustomList;