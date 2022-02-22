import { useCallback, useState } from "react";

const useDebounce = (time = 1000, text = "") => {
    const [debounceVal, setDebounceVal] = useState(text);
    const [timeoutVal, setTimeoutVal] = useState("");

    const handleDebounceVal = useCallback(
        (text) => {
            clearTimeout(timeoutVal);
            const timeout = setTimeout(() => setDebounceVal(text), time);
            setTimeoutVal(timeout);
        }, [time, timeoutVal]
    );

    return [debounceVal, handleDebounceVal];
};

export default useDebounce;