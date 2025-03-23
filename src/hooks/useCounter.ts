import React from "react";
import checkCount from "../utils/validators";

function useCounter(initialValue: number = 0) {
    const [count, setCount] = React.useState<number>(initialValue);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => {
        checkCount(count - 1);
        setCount((prevCount) => {
            return prevCount - 1;
        })
    };
    return {count, increment, decrement};
}

export default useCounter;
