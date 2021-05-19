import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Representatives from './Representatives.jsx';

const FindRepresentatives = () => {

  const [representatives, setRepresentatives] = useState(undefined);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState();

  const clickHandler = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/api/representatives?address=${address}`)
      .then((response) => {
        setRepresentatives(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const handleNameChange = useCallback(e => {
    setName(e.target.value)
  }, console.log(name))

  const handleAddressChange = useCallback(e => {
    setAddress(e.target.value)
  },console.log(address))

  return (
    <div>
      <h1>Take Action!</h1>
      <form className="form-style-7" onSubmit={clickHandler}>
        <ul>
        <li>
        <label htmlFor="name">Name / Nombre</label>
        <input onChange={handleNameChange} type="name" name="name" maxLength="100"/>
        <span>Enter your full name above</span>
         </li>
          <li>
            <label htmlFor="address">Address / Dirección </label>
              <input onChange={handleAddressChange} type="address" name="address" maxLength="100"/>
            <span>Enter your address above</span>
          </li>
          <li>
          <input type="submit" value="Send / Enviar" />
          </li>
        </ul>
      </form>
      <div>
        {representatives === undefined ? null :    <Representatives representatives={representatives}/>}
      </div>
    </div>
  )

};

export default FindRepresentatives;