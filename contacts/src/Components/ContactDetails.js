import React from 'react';

function ContactDetails({ filteredPersons }) {
  const mapped = filteredPersons.map(person => (
    <div style={{ color: 'red' }} key={person.id}>
      {person.firstName} <span style={{ fontWeight: 'bold' }}>{person.lastName}</span>
    </div>
  ));
  return (
    <>
      <h1>Hello </h1>
      <div>{mapped[0]}</div>
      <div></div>
    </>
  );
}

export default ContactDetails;
