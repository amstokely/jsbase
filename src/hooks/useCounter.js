import React from "react";

function useCounter(initialValue = 0) {
    const [count, setCount] = React.useState(initialValue);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);

    return { count, increment, decrement };
}

export default useCounter;
