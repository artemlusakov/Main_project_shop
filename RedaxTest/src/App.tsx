import './App.css'
import {store, DecrementAction, IncrementAction} from './store'
import {useEffect, useReducer} from "react";

function App() {

    const [, forceUpdate] = useReducer((x) => x + 1 ,0);

    useEffect(()=>{
        const unsubscribe = store.subscribe(()=>{
            forceUpdate();
        })
        return unsubscribe;
    },[])

    return (
        <div className='Main'>
            <div className="counterBlock">
                {/*dispatch - как пропс но необходим для отправки состояния */}
                <button onClick={() => store.dispatch({type: "increment"} satisfies IncrementAction)}>+</button>
                counter {store.getState().counter}
                <button onClick={() => store.dispatch({type: "decrement"} satisfies DecrementAction)}>-</button>
            </div>
        </div>
    )
}

export default App
