import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Representatives from './Representatives.jsx';
import EmailModal from './EmailModal.jsx';

const FindRepresentatives = () => {

  const [representatives, setRepresentatives] = useState(undefined);
  const [name, setName] = useState(undefined);
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
    <div className="homepage">
      <div className="title">
      <h1 className="header">Take Action!</h1>
      </div>
        {representatives === undefined ? (
          <form className="form-style-7" onSubmit={clickHandler}>
            <ul>

              <li>
                <label htmlFor="address">Address / Dirección </label>
                  <input onChange={handleAddressChange} type="address" name="address" maxLength="100"/>
                <span>Enter Your Address for Local Representative Contact Information</span>
              </li>
              <li>
              <input type="submit" value="Send / Enviar" />
              </li>
            </ul>
          </form>
        ) :  <Representatives representatives={representatives} name={name}/>}
          <div>
      </div>
    </div>
  )

};

export default FindRepresentatives;