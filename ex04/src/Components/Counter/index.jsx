import { useState } from "react"

import "./counter.css"

const Counter = () => {

    const [counter, useCounter] = useState(0);

    const Sum = () =>{
        useCounter(counter + 1);
    }

    const Sub = () => {
        useCounter(counter - 1);
    }

    return (

        <div className="counter">

            <h1 className="counter__tittle">Contador</h1>

            <h2 className="counter__value">{counter}</h2>

            <div className="counter__buttons">
                <input type="button" value="+" className="counter__button" onClick={Sum}/>
                <input type="button" value="-" className="counter__button" onClick={Sub}/>
            </div>

        </div>


    )

}

export default Counter