import React from 'react';

function PersonCard(props) {
  let mapped = props.person.map(p => {
    return (
      <>
        <div className="person_card" key={p.id}>
          <div className="person_name">
            <img
              className="card_icon"
              alt="avatar"
              src={require(`../contacts/profiles/${p.profileImage}`)}
            />
            <p>
              {p.firstName} <span style={{ fontWeight: 'bold' }}>{p.lastName}</span>
            </p>
          </div>

          <div className="row">
            <div className="column">
              <p>MOBILE</p>
              <p> TELEPHONE</p>
              <p> EMAIL</p>
              <p> HOME ADRESS</p>
            </div>
            <div className="column">
              <p>{p.mobile}</p>
              <p> {p.telephone}</p>
              <p> {p.email}</p>
              <p> {p.homeAddress}</p>
            </div>
          </div>
        </div>
      </>
    );
  });
  return <>{mapped[0]}</>;
}

export default PersonCard;
