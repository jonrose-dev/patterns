import { useRef, useState } from "react";

export const useTriggerReRender = () => {
    const [,setTrigger] = useState(0);
    return () => setTrigger(trigger => trigger === Number.MAX_SAFE_INTEGER ? 0 : trigger + 1);
}

export const useRenderCounter = () => {
    const renderCount = useRef(0);
    renderCount.current = renderCount.current + 1;
    return renderCount.current;
}
