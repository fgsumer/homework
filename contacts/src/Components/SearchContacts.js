import React from 'react';

function SearchContacts({ persons, searchHandler, query, mappedPerson, filteredPersons }) {
  return (
    <>
      <div>
        <input className="search" type="text" value={query} onChange={searchHandler}></input>
        {filteredPersons.map(person => {
          return <div>{person.firstName}</div>;
        })}
      </div>
    </>
  );
}

export default SearchContacts;
