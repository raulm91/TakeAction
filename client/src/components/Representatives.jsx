import React, { useState, Fragment } from 'react';
import EmailModal from './EmailModal.jsx';

const Representatives = ({ representatives, name }) => {

  const [officialName, setOfficialName] = useState(undefined);

  return (

      <React.Fragment>
        <div className="officials">
      {representatives.officials.map((official, index) => (
        <div className="official" key={index}>
          <div className="officialHeader">
          <h2 className="officialName">{official.name}</h2>
            <p className="officialParty">{official.party}</p>
            <p className="officialOffice">{representatives.offices[index].name}</p>
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
              <div key={index}>
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
                <button className="closeButton" onClick={()=>setOfficialName(official.name)}>{official.emails[0]}</button>
              </ul>
            </div>
            <EmailModal officialName={officialName} name={name}/>
        </div>
      ))}
      </div>
      </React.Fragment>

  )


}

export default Representatives;