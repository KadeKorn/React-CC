// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const decrementCount = () => {
//     if (count > 0) {
//       setCount(prevCount => prevCount - 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrementCount}>Decrement</button>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// export default Counter;
// ChatGPT ^ created this quickly for me. It took awile to have it load properly. Now, I will see how david did it

import React, { useState } from "react";

// function Counter() {
//   const [counter, setCounter] = useState(0);
//   function incrementCounter() {
//     console.log("increment");
//     // setCounter((previousCounter) => previousCounter + 1);
//     setCounter((previousCounter) => previousCounter + 1);
//   }

//   function decrementCounter() {
//     console.log("decrement");
//     // setCounter((previousCounter) => previousCounter - 1);
//     setCounter((previousCounter) => previousCounter - 1);
//   }
//   return (
//     <>
//       <button onClick={decrementCounter}>-</button>
//       {counter}
//       <button onClick={incrementCounter}>+</button>
//     </>
//   );
// }

function Counter() {
    const [arr, setArr] = useState([])

    function addPlus(){
        setArr((...prevArr) => prevArr + "+")
    }

    function addMinus(){
        setArr((...prevArr) => prevArr + "-")
    }
    return (
        <>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr}
        </>
    )
}


export default Counter;



