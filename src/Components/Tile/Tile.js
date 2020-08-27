import React from 'react';
import './tile.scss'

const Tile = (props) => {

   if(props.active){
    if (props.cont === 1) {
        return (
            <button onClick={props.click} className="tile red" disabled>
                <svg height="36.5px" viewBox="0 0 365.696 365.696" width="36.5px" xmlns="http://www.w3.org/2000/svg"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" /></svg>
            </button>

        )
    }

    else if (props.cont === 0) {
        return (
            <button onClick={props.click} className="tile red" disabled>
                <svg height="100"  width="100">
                    <circle cx="35" cy="45" r="15"  strokeWidth="10" fill="transparent" />
                </svg>
            </button>

        )
    }
    else {
        return (
            <button onClick={props.click} className="tile red" disabled>

            </button>

        )
    }
   }
   else{
    if (props.cont === 1) {
        return (
            <button onClick={props.click} className="tile red" >
                <svg height="36.5px" viewBox="0 0 365.696 365.696" width="36.5px" xmlns="http://www.w3.org/2000/svg"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" /></svg>
            </button>

        )
    }

    else if (props.cont === 0) {
        return (
            <button onClick={props.click} className="tile red" >
                <svg height="100"  width="100">
                    <circle cx="35" cy="45" r="15" stroke="black" strokeWidth="10" fill="transparent" />
                </svg>
            </button>

        )
    }
    else {
        return (
            <button onClick={props.click} className="tile red" >

            </button>

        )
    }
   }

}
export default Tile;