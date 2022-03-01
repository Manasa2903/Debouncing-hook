import { useCallback, useState } from "react";

const useDebounce = (time = 1000, initialText = "") => {
    const [debounceVal, setDebounceVal] = useState(initialText);
    const [timeoutVal, setTimeoutVal] = useState("");

    const handleDebounceVal = useCallback(
        (text) => {
            clearTimeout(timeoutVal);
            const timeout = setTimeout(() => setDebounceVal(text), time);
            setTimeoutVal(timeout);
        }, [time, timeoutVal]
    );

    console.log("ss");

    return [debounceVal, handleDebounceVal];
};

export default useDebounce;