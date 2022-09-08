import React from 'react'
import { useEffect, useState } from "react";
import { BackCard } from '../components/BackCard'
import { FrontCard } from '../components/FrontCard'


const GameView = () => {
    const [Checked, setChecked]=useState(false);
    const [firstSelectedCard, setFirstSelectedCard] = useState(-1)
    const [secondSelectedCard, setSecondSelectedCard] = useState(-1)
    const array=[1,2,3,4];
    return(
        <div id="gameview" className='container'>
            
            {array.map((data, id)=>
                <div id="containerCard" key={id}>
                    {array.map((elt, key) => (
                        <BackCard key={`${id}-${key}`} />
                    ))}
                </div>
            )}
            
        </div>
    );
}

export default GameView;