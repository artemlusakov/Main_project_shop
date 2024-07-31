import './App.css'
import {useState} from "react";

function App() {
    const [cardList, setCardList] = useState([
        {id: 1, order: 3, text: 'Карточка 3'},
        {id: 1, order: 1, text: 'Карточка 1'},
        {id: 1, order: 2, text: 'Карточка 2'},
        {id: 1, order: 4, text: 'Карточка 4'}
    ])

  return (
    <div className="app">
        {cardList.map(card =>
            <div
                onDragStart={(e)=>dragStartHandler(e,card)}
                onDragLeave={(e)=> Handler}
                onDragEnd={(e)=> Handler}
                onDragOver={(e)=> draHandler}
                onDrop={(e)=> dropHandler}

                draggable={true}
                className="card"
            >
                {card.text}
            </div>
        )}
    </div>
  )
}

export default App
