import React, {useState} from 'react';

const TestState = () => {
    const [numbers, setNumbers]= useState([1,2,3])

    const addNum = ()=>{
        const rand = Math.round(Math.random() * 10);
        const newArr = [...numbers, rand];
        setNumbers(newArr)
    }

    const ClearAll = ()=>{
        setNumbers([])
    }

    return (
            <div className='TestBox'>
                <ul>
                    {
                        numbers.map((num, index) => <li key={index}>{num}</li>)
                    }
                </ul>
                <button onClick={addNum}>Новое число</button>
                <button onClick={ClearAll}>очистить Полностью</button>

            </div>
    );
};

export default TestState;