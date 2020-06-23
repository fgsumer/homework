import React from 'react';
import CONTACTS from '../contacts/MockData.js';
// import PersonCard from './PersonCard.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: CONTACTS,
      query: '',
      // isActive: false,
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { persons, query } = this.state;

    let filteredPersons = persons.filter(
      person =>
        person.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        person.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );

    let mappedPersons = filteredPersons.map(person => (
      <div className="contactlist" key={person.id}>
        <img
          className="icon"
          alt="avatar"
          src={require(`../contacts/profiles/${person.profileImage}`)}
        />
        <p>
          {person.firstName} <span style={{ fontWeight: 'bold' }}>{person.lastName}</span>
        </p>
      </div>
    ));

    return (
      <>
        <div className="sidebar">
          <form>
            <input
              className="search"
              type="text"
              value={this.query}
              onChange={this.searchHandler}
            ></input>
          </form>
          <div>{mappedPersons}</div>
        </div>
        <div style={{ borderColor: 'red', float: 'right' }}>{mappedPersons[0]}</div>
        {/* <PersonCard person={filteredPersons[0]}></PersonCard> */}
      </>
    );
  }
}

export default Search;
