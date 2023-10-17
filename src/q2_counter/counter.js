import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const increase = ()=>{
        setCount(count + 1);
    }
    const decrease = ()=>{
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Current Number:
                {count}
            </h1>
            <button onClick={increase}>Increase +1</button>
            <button onClick={decrease}>Decrease -1</button>
        </div>
    );
}