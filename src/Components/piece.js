import React from 'react';
import { bB, kB, nB, pB, qB, rB, bW, kW, nW, pW, qW, rW } from '../assets/images/index';

const piece = (props) => {
    let image = bB;

    return (
       <img 
        src={image} 
        onDragStart={(e)=> {
            e.dataTransfer.setData('text', e.target.id);

            if(e.target.id.charAt(0) == 'b'){
                //bishop move function
                console.log('bishop picked up');
                // bishopMove(ev.target.id);
             }
        }
    }/>
    )

}


export default piece;