import React from "react";
const CustomList=({items})=>{
    return(
        <>
        <div className="custom">
            {items.map((item,index)=>(
                <div key={index} className="items">
                    {item}
                </div>
            ))}
        </div>
        </>
    )
}
export default CustomList;