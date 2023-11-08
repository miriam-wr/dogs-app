import React from "react";
import { useSelector } from "react-redux";
import './summary.css'


const Summary = () => {

    const counter = useSelector(state => state.dogs.counter);

    return (<div className="summary">
        {counter && Object.entries(counter).map(([key, value]) => (
        <div key={key}>
          <p><b>{key}</b></p>
          <p>count: {value.images}  likes: {value.likes}</p>
        </div>
          ))}
      </div>);
}

export default Summary;