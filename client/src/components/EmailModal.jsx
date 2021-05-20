import react, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const EmailModal = ({ name, representatives }) => {

  <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Dear ,

As a tenant living in your district, I am writing to you to ask you to extend the current emergency tenant protections and enact a strong anti-harassment ordinance. I and thousands more tenants across Los Angeles are still facing unemployment, increased expenses, and mounting debt in addition to the ongoing public health crisis. Many of us have not returned to full employment and have accrued thousands of dollars of debt in rent from previous months.

Every day, we face threats of eviction, illegal lock-outs, and harassment from landlords. We need to extend the current emergency eviction protections to protect all tenants from eviction until the COVID-19 state of emergency has ended and unemployment rates have returned to pre-pandemic levels.

LA also needs a strong anti-harassment ordinance to keep tenants safely and securely housed. I urge you to reject Councilmember Lee's amendments to the antiharassment ordinance and include Councilmember Raman's amendments, in order to protect the most vulnerable members of our community from being threatened and intimidated into homelessness.

Sincerely,
{name}
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </>

}

export default EmailModal;