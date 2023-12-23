import React, { useState } from 'react';

const Slider = (prop) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [page, setPage] = useState({
    view: 100,
    price: 16.00
  });

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    if (sliderValue <= 20) {
        setPage((prev) => {
          return {
            ...prev,
            view: 10,
            price: 8.00
          }
        })
    } else if (sliderValue > 20 && sliderValue <= 40) {
      setPage((prev) => {
        return {
          ...prev,
          view: 50,
          price: 12.00
        }
      })
  } else if (sliderValue > 40 && sliderValue <= 60) {
    setPage((prev) => {
      return {
        ...prev,
        view: 100,
        price: 16.00
      }
    })
} else if (sliderValue > 60 && sliderValue <= 80) {
  setPage((prev) => {
    return {
      ...prev,
      view: 500,
      price: 24.00
    }
  })
} else {
  setPage((prev) => {
    return {
      ...prev,
      view: 1000,
      price: 36.00
    }
  })
}
prop.pageOutput(page, false);
};

 
  return (
    <>
      <div className='slider-ranger'>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            value={sliderValue}
            className="slider" 
            id="myRange"
            onChange={handleSliderChange}
            style={{
              background: `linear-gradient(to right, hsl(174, 86%, 45%) ${sliderValue}%, hsl(224, 65%, 95%)${sliderValue}%)`,
            }}
  />
      </div>
    </div> 
    </>
  );
};

export default Slider;
