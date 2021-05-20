import React from 'react';
import FindRepresentatives from './FindRepresentatives.jsx';
import image from '../image/pngkit_skyline-png_1607855.png';
import icon from '../image/LACCLA Logo (Black on White).png';


const App = () => {

  return(
    <div id="findReps">
      <img className="LACCLAIcon"src={icon}/>
      <img className="cityscape"src={image}/>
        <FindRepresentatives/>
    </div>
  )
}

export default App;
