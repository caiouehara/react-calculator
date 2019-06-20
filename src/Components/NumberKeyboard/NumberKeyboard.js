import React, { useState } from 'react';
 
function NumbersKeyboard() {
    const [liveNumber, setNumber] = useState(0);

    function handleClick(e) {
        setNumber(parseInt(e.target.id));
        console.log(liveNumber);
    };

    return (
        <div className="NumbersKeyboard">
            <button className="number" onClick={handleClick} id='0'>0</button>
            <button className="number" onClick={handleClick} id='1'>1</button>
            <button className="number" onClick={handleClick} id='2'>2</button>
            <button className="number" onClick={handleClick} id='3'>3</button>
            <button className="number" onClick={handleClick} id='4'>4</button>
            <button className="number" onClick={handleClick} id='5'>5</button>
            <button className="number" onClick={handleClick} id='6'>6</button>
            <button className="number" onClick={handleClick} id='7'>7</button>
            <button className="number" onClick={handleClick} id='8'>8</button>
            <button className="number" onClick={handleClick} id='9'>9</button>
        </div>

    );
};

export default NumbersKeyboard;
