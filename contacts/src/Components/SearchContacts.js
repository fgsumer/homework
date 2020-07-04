import React from 'react';

const SearchContacts = ({ onSearchHandler, query, person, activePerson, onSetActivePerson }) => (
  <>
    <div className="contacts_list">
      <input
        className="search"
        placeHolder="Search..."
        type="text"
        value={query}
        onChange={onSearchHandler}
      ></input>
      {person.map(person => (
        <div
          className={`list_item ${activePerson === person ? 'active' : ''}`}
          key={person.id}
          onClick={() => onSetActivePerson(person)}
        >
          <img className="icon" alt="avatar" src={`./profiles/${person.profileImage}`} />
          <p>
            {person.firstName} <span style={{ fontWeight: 'bold' }}>{person.lastName}</span>
          </p>
        </div>
      ))}
    </div>
  </>
);

export default SearchContacts;
