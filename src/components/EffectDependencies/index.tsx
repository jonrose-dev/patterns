import { FC, useEffect, useState } from "react"


export const EffectDependencies = () => {
    const [someObj, setSomeObj] = useState({ count: 1, value: 'hello' });
    const onClick = () => {
        setSomeObj((obj) => ({ ...obj, count: obj.count + 1 }));
    }
    return (
        <div>
            <button onClick={onClick}>Click Me to increment</button>
            <SomeComponentBadDeps someObj={someObj}/>
            <SomeComponentGoodDeps someObj={someObj} />
        </div>
    )
}

type Props = {
    someObj: {
        count: number;
        value: string;
    }
}
const SomeComponentBadDeps: FC<Props> = ({ someObj }) => {
    useEffect(() => {
        console.log('In effect for SomeComponentBadDeps')
        console.log(someObj.value)
    }, [someObj])
    return (<p>I DON'T handle my deps effectively</p>)
}

const SomeComponentGoodDeps: FC<Props> = ({ someObj }) => {
    const { value } = someObj;
    useEffect(() => {
        console.log('In effect for SomeComponentGoodDeps')
        console.log(value)
    }, [value])
    return (<p>I DO handle my deps effectively</p>)
}