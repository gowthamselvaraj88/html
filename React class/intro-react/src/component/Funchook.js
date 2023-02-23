import React, { useState } from "react"

const Funchook = () => {
    const [count, setCount] = useState(5)
    //setCount->function to upddate the current state
    const increement = () => {
        setCount(count + 1)
    }

    const decreement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button type="button" onClick={increement}>Incremmented value</button>
            <button type="button" onClick={decreement}>Decremented value</button>
        </div>
    )
}

export default Funchook