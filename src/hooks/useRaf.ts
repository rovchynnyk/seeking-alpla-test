import { useRef, useEffect, useCallback } from "react";

export const useRaf = (callback: () => void) => {
    const requestRef = useRef<any>();

    const animate = useCallback(() => {
        callback();
        requestRef.current = requestAnimationFrame(animate);
    }, [callback]);

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [animate]);
};
