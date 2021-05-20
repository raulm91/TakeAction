import React, { useState, Fragment } from 'react';

const Representatives = ({ representatives }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

      <React.Fragment className="officials">
      {representatives.officials.map((official, index) => (
        <div className="official">
          <div className="officialHeader">
          <h2 className="officialName">{official.name}</h2>
            <p className="officialParty">{official.party}</p>
          </div>
          {official.address && (
            <div className="officialAddress">
              <h3>Address</h3>
               <ul>
                <p>{official.address[0].line1}</p>
                <p>{official.address[0].city}</p>
                <p>{official.address[0].state}</p>
                <p>{official.address[0].zip}</p>
               </ul>
            </div>
          )}
          {official.number ? null : (
            <div className="officialNumber">
              <h3>Phone Number</h3>
              <ul>
                <p>{official.phones[0]}</p>
              </ul>
            </div>
          )}
          {official.channels ? (
            <div>
              <h3>Social-Media</h3>
            {official.channels.map((channel, index) => (
              <div>
              <p>
                {`${channel.type}.com/${channel.id}`}
              </p>
              </div>
            ))}
            </div>
          ) : (
            null
          )}
            <div className="officialEmail">
              <h3>E-Mail</h3>
              <ul>
                <p onClick={handleShow}>{official.emails[0]}</p>
              </ul>
            </div>
        </div>
      ))}
      </React.Fragment>

  )


}

export default Representatives;