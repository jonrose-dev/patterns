import { FC, memo, useMemo } from "react";
import { useRenderCounter, useTriggerReRender } from "../../hooks";

export const Memoization: FC = () => {
    const trigger = useTriggerReRender();
    return (
        <div>
            <button onClick={trigger}>Trigger parent re render</button>
            <h3>No Memoization</h3>
            <NoMemoization foo={{ bar: 'baz' }} />
            <h3>Unnecessary Memoization</h3>
            <UnnecessaryMemoization foo={{ bar: 'baz' }} />
            <h3>Goldilocks Memoization</h3>
            <GoldilocksMemoization foo={{ bar: 'baz' }} />
        </div>
    )
}


type Props = {
    foo: {
        bar: string;
    }
}
const NoMemoization: FC<Props> = ({ foo }) => {
    return (
        <div>
            <SomeOtherComponent someObj={{ value: foo.bar }} />
        </div>
    )
}

// const someStyle = { width: 25 };
const UnnecessaryMemoization: FC<Props> = ({ foo }) => {
    // const someStyle = useMemo(() => ({ width: 25 }), []);
    const { bar } = foo;
    const someObj = useMemo(() => ({ value: bar }), [bar])
    return (
        <div>
            <SomeOtherComponentUnnecessaryMemoization someObj={someObj} />
        </div>
    )
}

const GoldilocksMemoization: FC<Props> = ({ foo }) => {
    const { bar } = foo;
    const someObj = useMemo(() => ({ value: bar }), [bar])
    return (
        <div>
            <SomeOtherComponent someObj={someObj} />
        </div>
    )
}

type SomeOtherComponentProps = {
    someObj: {
        value: string;
    }
}
const SomeOtherComponent: FC<SomeOtherComponentProps> = memo(({ someObj }) => {
    const renderCount = useRenderCounter();
    return (
        <div>
            <p>Value: {someObj.value}</p>
            <p>Render count: {renderCount}</p>
        </div>
    ) 
});

type SomeOtherComponentUnnecessaryMemoizationProps = {
    someObj: {
        value: string;
    }
}
const SomeOtherComponentUnnecessaryMemoization: FC<SomeOtherComponentUnnecessaryMemoizationProps> = memo(({ someObj }) => {
    const renderCount = useRenderCounter();

    const { value } = someObj;
    const valueMemoized = useMemo(() => value, [value])
    return (
        <div>
            <p>Value: {valueMemoized}</p>
            <p>Render count: {renderCount}</p>
        </div>
    ) 
});