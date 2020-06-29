import React from 'react';

function ContactDetails({ filteredPersons }) {
  const mapped = filteredPersons.map(person => (
    <div className="contact_details" style={{ color: 'red' }} key={person.id}>
      <div className="contact_name">
        {/* <img
          className="icon"
          alt="avatar"
          src={`./profiles/${person.profileImage}`}
          // src={'./profiles/female-1.jpg'}
        /> */}
        {/* <p>
          {person.firstName} <span style={{ fontWeight: 'bold' }}>{person.lastName}</span>
        </p> */}
      </div>
      <div className="row">
        <div className="column">
          <img
            className="icon"
            alt="avatar"
            src={`./profiles/${person.profileImage}`}
            // src={'./profiles/female-1.jpg'}
          />
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
  ));
  return <>{mapped[0]}</>;
}

export default ContactDetails;
