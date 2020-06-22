import React from 'react';

function PersonCard(props) {
  let mapped = props.person.map(p => p.firstName);
  return (
    <div>
      <h1>Personcard {mapped[0]}</h1>
    </div>
  );
}

export default PersonCard;
