import React, {useEffect, useState} from 'react';

const TestUseEfect = () => {
    const [Time, setTime] = useState()

    useEffect(() => {
        setInterval(() => {

        }, 1000)
    }, [])

    return (
        <div>
            <div> 00:00:00</div>
        </div>
    );
};

export default TestUseEfect;