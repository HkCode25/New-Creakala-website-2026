import React from "react";
import { useState } from 'react'


function Banner(props){
    const [count, setCount] = useState(0)


    return(
        <div className="banner">
            <div><h1>{props.greet}, I make Minimalistic Design and Intuitive Interactions</h1></div>
            <div><h3>I design and develop sophisticated, user-friendly responsive web applications that transform complex ideas into elegant digital experiences.</h3></div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        </div>

    );
};

export default Banner;