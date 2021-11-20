import './App.css';
import React from 'react';
import { incNumber } from "./actions/index";
import { decNumber } from "./actions/index";
import { multNumber } from "./actions/index";
import { divNumber } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myState1 = useSelector((state) => state.multTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">

        <div className="container">

          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={myState} />
            <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
          </div>

        </div>

        <div className="container">

          <h1>Multiplication/Division counter of 5</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={() => dispatch(divNumber())}><span>/</span></a>
            <input name="quantity" type="text" className="quantity__input" value={myState1} />
            <a className="quantity__plus" title="Increment" onClick={() => dispatch(multNumber(5))}><span>*</span></a>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
