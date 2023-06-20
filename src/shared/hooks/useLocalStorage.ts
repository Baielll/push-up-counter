import { useState, useCallback } from "react";

export const useLocalStorage = (key: string, initialValue: number) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue;
    })
    
    const setValue = useCallback((value: any) => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key])

    const deleteValue = useCallback((value: any) => {
        setStoredValue(value)
        window.localStorage.removeItem(key)
    }, [key])

    return {storedValue, setValue, deleteValue}
}