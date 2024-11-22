import React from 'react';
import { useState } from 'react';


var num = 0;
function MyButton(){
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={handleClick}>{(count%5)+1}</button>
        </div>
    );
}

export default MyButton;