
import React, {  useState } from 'react';
import './ChoiceSlide.css';


const ChoiceSlide = ({image, title, onSlideClick, isSelected}) => {
  
  const [selected, setSelected] = useState(false);

  const handleSlideClick = () => {
    onSlideClick(image);
  };
  return (
    <div className='choiceSlide'>
        <div className={`choiceSlide__container ${isSelected ? 'selected' : ''}`} onClick={handleSlideClick} id={image}>
        <img src={image} alt='image'/>
    <p>{title}</p>
        </div>
    
    </div>
  );
};

export default ChoiceSlide;
