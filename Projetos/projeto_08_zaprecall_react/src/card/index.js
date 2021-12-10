import './style.css';
import React from 'react';
import FaceUp from '../faceUp';
import FaceDown from '../faceDown';


export default function Card({card, index, deckLen, nextCard}) {

/*     console.log('card:  ', card);
    console.log('index:  ', index);
    console.log('nextCard:  ', nextCard); */
    const [face, setFace] = React.useState(false);
    function turnCard() {
        setFace(!face);
    }

    const {question, answer, score} = card;
    return (
        <>
            {!face ? <FaceUp question={card} index={index} deckLen={deckLen} /> : <FaceDown />}
            <div className='card'>
                <span className='counter'>{index + 1}/{deckLen}</span>
                <span className='question'>{question}</span>
                <ion-icon onClick={nextCard} name="arrow-undo"></ion-icon>
                <ion-icon onClick={turnCard} name="arrow-undo"></ion-icon>
            </div>
        </>
    )
}