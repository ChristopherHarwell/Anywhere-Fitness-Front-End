import React from 'react';
import Dumbbell from "../../assets/dumbbell.jpg";
import Sneakers from "../../assets/sneakers.jpg";

import "./home-styles.scss";

export default function home() {
    return (
        <div>
            <h4 className="top-text">AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held.</h4>
          <img className="dumbbell" src={Dumbbell} alt="someone holding a dumbbell"/>
            <br/>

            <div middle-icon-text>

            <img className="icon" src="https://img.icons8.com/wired/64/000000/track-and-field.png" alt="icons8"/>

            <img className="icon" src="https://img.icons8.com/ios/50/000000/boastful.png" alt="icons8"/>

            <img className="icon" src="https://img.icons8.com/ios/50/000000/balance.png" alt="icons8"/>
            </div>
        <h4 className="middle-text">Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more.</h4>
      
          <img className="sneakers" src={Sneakers} alt="somone wearing shoes outside"/>
        
          <h4 className="bottom-text">Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.</h4>
        </div>
    )
}
