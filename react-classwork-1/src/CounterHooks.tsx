import React, {ReactElement, useState} from  'react'

interface Promps {
    initialCount: number;
}

export default function CounterHooks (promps: Promps): ReactElement{
    const [count, setCount] = useState(promps.initialCount);
    return (
        <div>
            <button className="btn2" onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
            <span> {count}</span>
            <button className="btn2" onClick={() => setCount(prevCount => prevCount - 1)}> - </button>
        </div>
    )
}
