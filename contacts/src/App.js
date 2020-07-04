import React from 'react';
import Header from './Components/Header';
import SearchContacts from './Components/SearchContacts';
import ContactDetails from './Components/ContactDetails';

import contacts from './assests/MockData.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      activePerson: contacts[0],
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onSetActivePerson = this.onSetActivePerson.bind(this);
  }

  onSearchHandler(event) {
    this.setState({
      query: event.target.value,
    });

    console.log(this.query);
  }

  onSetActivePerson(person) {
    this.setState({
      activePerson: person,
    });
  }

  render() {
    const { query, activePerson } = this.state;

    let filteredPersons = contacts.filter(
      person =>
        person.firstName.toLowerCase().includes(query.toLowerCase()) ||
        person.lastName.toLowerCase().includes(query.toLowerCase()),
    );

    return (
      <div>
        <Header />
        <div className="flex_container">
          <SearchContacts
            onSearchHandler={this.onSearchHandler}
            query={query}
            person={filteredPersons}
            activePerson={activePerson}
            onSetActivePerson={this.onSetActivePerson}
          />
          {filteredPersons.length === 0 ? (
            <h1 className="contact_details" style={{ margin: 0 }}>
              No such person
            </h1>
          ) : (
            <ContactDetails person={activePerson} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
