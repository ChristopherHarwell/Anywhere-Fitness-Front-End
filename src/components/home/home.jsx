import React from 'react';
import Dumbbell from "../../assets/dumbbell.jpg";
import Sneakers from "../../assets/sneakers.jpg";

import "./home-styles.scss";

export default function home() {
    return (
        <div>
          <img className="dumbbell" src={Dumbbell} alt="someone holding a dumbbell"/>

          <img className="dumbbell" src={Sneakers} alt="somone wearing shoes outside"/>
        </div>
    )
}
