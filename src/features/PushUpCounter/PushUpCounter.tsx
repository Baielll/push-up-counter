import { FC, useEffect, useRef, useState } from 'react';
import s from "./PushUpCounter.module.scss";
import { useLocalStorage } from '../../shared';

export const PushUpCounter: FC = () => {
    const [count, setCount] = useState<number>(0)
    const [removed, setRemoved] = useState<boolean>(false)
    const excludeButtonRef = useRef<HTMLButtonElement>(null)

    const initialCount = 0;
    const { storedValue, setValue, deleteValue } = useLocalStorage("count", initialCount);


    useEffect(() => {
        const storedCount = localStorage.getItem("count")
        if (storedCount) {
            setCount(parseInt(storedCount))
        }
    }, [])

    const recordCount = async (e: any) => {
        if(!excludeButtonRef.current?.contains(e.target as HTMLElement)) {
        const newCount = count + 1
        setCount(newCount)
        setValue(newCount)
        setRemoved(false)
        }
    }
    const removeCount = () => {
        setCount(initialCount)
        deleteValue("count")
        setRemoved(true)
    }

    return (
        <div className={s.counter} onClick={recordCount}>
            <div className={s.count}>
            {removed ? (
                <h1>{count}</h1>
            ) : (
                <h1>{storedValue}</h1>
            )
        }
            </div>
            <div className={s.push}>
                <h2>Push</h2>
            </div>          
            <div className={s.clear}>
            <button ref={excludeButtonRef} onClick={removeCount}>Clear</button>
            </div>
        </div>
    );
};