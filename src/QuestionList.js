import React, { useState } from "react";

export default function Question ({id,q,name,setAval}){

    // const checkAnswer = (e) => {
    //     setAval({
    //         aVal: e.target.value,
    //         aName :e.target.name
    //     })        
    // };

return(
<>
    <div id={id}>
        <label>Q. {q}</label>
        <div>
            <input type="radio" name={name} value={1} onClick={checkAnswer}/>
            <input type="radio" name={name} value={2} onClick={checkAnswer}/>
            <input type="radio" name={name} value={3} onClick={checkAnswer}/>
            <input type="radio" name={name} value={4} onClick={checkAnswer}/>
            <input type="radio" name={name} value={5} onClick={checkAnswer}/>
        </div>
    </div>
</>
);

};