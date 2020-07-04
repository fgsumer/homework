import React from 'react';

const ContactDetails = ({ person }) => {
  return (
    <div className="contact_details" style={{ color: 'red' }}>
      <div className="contact_name"></div>
      <div className="row">
        <div className="column">
          <img className="icon" alt="avatar" src={`./profiles/${person.profileImage}`} />
        </div>
        <div className="column">
          <p style={{ fontSize: '3rem' }}>
            {person.firstName} <span style={{ fontWeight: 'bold' }}>{person.lastName}</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <p>MOBILE</p>
          <p> TELEPHONE</p>
          <p> EMAIL</p>
          <p> HOME ADRESS</p>
        </div>
        <div className="column">
          <p>{person.mobile}</p>
          <p> {person.telephone}</p>
          <p> {person.email}</p>
          <p> {person.homeAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
