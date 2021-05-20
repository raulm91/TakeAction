import React from 'react';

const EmailModal = (props) => {

  if (!props.show) {
    return null;
  }

  return(
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Copy the message below to send to your representative</h4>

        </div>
        <div className="modal-body">

            As a tenant living in your district, I am writing to you to ask you to extend the current emergency tenant protections and enact a strong anti-harassment ordinance. I and thousands more tenants across Los Angeles are still facing unemployment, increased expenses, and mounting debt in addition to the ongoing public health crisis. Many of us have not returned to full employment and have accrued thousands of dollars of debt in rent from previous months.

            Every day, we face threats of eviction, illegal lock-outs, and harassment from landlords. We need to extend the current emergency eviction protections to protect all tenants from eviction until the COVID-19 state of emergency has ended and unemployment rates have returned to pre-pandemic levels.

            LA also needs a strong anti-harassment ordinance to keep tenants safely and securely housed. I urge you to reject Councilmember Lee's amendments to the antiharassment ordinance and include Councilmember Raman's amendments, in order to protect the most vulnerable members of our community from being threatened and intimidated into homelessness.

        </div>
        <div className="modalFooter">
          <button onClick={props.onClose} className="closeButton">Close</button>
        </div>
      </div>
    </div>
  )

}

export default EmailModal;

