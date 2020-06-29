import React from 'react';

function SearchContacts({ searchHandler, query, filteredPersons }) {
  return (
    <>
      <div className="contacts_list">
        <input
          className="search"
          placeHolder="Search..."
          type="text"
          value={query}
          onChange={searchHandler}
        ></input>
        {filteredPersons.map(person => (
          <div className="list_items" key={person.id}>
            <img
              className="icon"
              alt="avatar"
              src={`./profiles/${person.profileImage}`}
              // src={'./profiles/female-1.jpg'}
            />
            <p>
              {person.firstName} <span style={{ fontWeight: 'bold' }}>{person.lastName}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchContacts;
