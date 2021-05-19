import React, { useState, Fragment } from 'react';

const Representatives = ({ representatives }) => {

  return (

      <div className="officials">
      {representatives.officials.map((official, index) => (
        <ul className="official">
          <h2 className="officialName">{official.name}</h2>
            <p className="officialParty">{official.party}</p>
          <h3>Address</h3>
          <ul className="officialAddress">
            <p>{official.address[0].line1}</p>
            <p>{official.address[0].city}</p>
            <p>{official.address[0].state}</p>
            <p>{official.address[0].zip}</p>
          </ul>
          <h3 className="officialNumber">Phone Number</h3>
          <ul>
            <p>{official.phones[0]}</p>
          </ul>
          <h3 className="officialEmail">E-Mail</h3>
          <ul>
            <p>{official.emails[0]}</p>
          </ul>
        </ul>
      ))}
      </div>

  )


}

export default Representatives;