
import React from 'react';
import './ChoiceSlide.css';




const ChoiceSlide = ({image, title}) => {
  
  return (
    <div className="choiceSlide">
        <div className="choiceSlide__container">
        <img src={image}/>
    <p>{title}</p>
        </div>
    
    </div>
  );
};

export default ChoiceSlide;
