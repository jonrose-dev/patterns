import { useEffect, useState, FC } from "react"
import { useRenderCounter } from "../../hooks"

export const DerivedState = () => {
    return (
        <div>
            <h3>Value derivation stored in state </h3>
            <StoredInState someProp />
            <br />
            <h3>Value derivation NOT stored in state </h3>
            <NotStoredInState someProp />
            <br />
        </div>
    )   
}

type Props =  {
    someProp?: boolean;
}
const StoredInState: FC<Props> = ({ someProp }) => {
    const [value, setValue] = useState<string | null>(null);
    const renderCount = useRenderCounter();
    useEffect(() => {
        if (someProp) {
            setValue('Foo');
        } else {
            setValue('Bar');
        }
    }, [someProp])

    return (
        <div>
            <p>Value: {value}</p>
            <p>Renders: {renderCount}</p>
        </div>
    )
}

const NotStoredInState: FC<Props> = ({ someProp }) => {
    const renderCount = useRenderCounter();

    const value = someProp ? 'Foo' : 'Bar'

    return (
        <div>
            <p>Value: {value}</p>
            <p>Renders: {renderCount}</p>
        </div>
    )
}