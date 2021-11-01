import { useEffect, useState } from "react"

export const ComponentWithinComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(count => count + 1);
    }
    const SomeOtherComponent = () => {
        useEffect(() => {
            console.log('SomeOtherComponent has just mounted')
        }, [])
        return <p>Some Other Component</p>
    }
    return (
        <div>
            <button onClick={handleClick}>Click me to increment the counter</button>
            <p>{`Re - render ${counter} times`}</p>
            <SomeOtherComponent />
        </div>
    )
}