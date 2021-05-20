import React, { useState } from 'react';
import FindRepresentatives from './FindRepresentatives.jsx';
import image from '../image/pngkit_skyline-png_1607855.png';
import icon from '../image/LACCLA Logo (Black on White).png';
import EmailModal from './EmailModal.jsx';

const App = () => {

  const [show, setShow] = useState(false);

  return(
    <>
      <div id="findReps">
        <img className="LACCLAIcon"src={icon}/>
        <img className="cityscape"src={image}/>
          <FindRepresentatives/>
            <form className="form-style-7">
            <input type="button" value="Email Your Representative" className="modalButton" onClick={()=>setShow(true)}></input>
            </form>
            <EmailModal onClose={()=>setShow(false)} show={show}/>
      </div>
    </>
  );
}

export default App;
