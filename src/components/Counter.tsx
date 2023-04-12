import { useState } from 'react';
import styles from './style.module.scss';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div className={styles.counter}>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>CLIKE</button>
        </>
    );
};

export default Counter;
