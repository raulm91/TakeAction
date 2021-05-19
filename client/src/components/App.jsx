import React from 'react';
import FindRepresentatives from './FindRepresentatives.jsx';
import image from '../image/pngkit_skyline-png_1607855.png';

const App = () => {
  return(
    <div>
      <img src={image}/>
      <FindRepresentatives/>
    </div>
  )
}

export default App;
