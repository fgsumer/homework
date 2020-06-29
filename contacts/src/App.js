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
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;

    let filteredPersons = contacts.filter(
      person =>
        person.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        person.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );

    return (
      <div>
        <Header />
        <div className="flex_container">
          <SearchContacts
            searchHandler={this.searchHandler}
            query={query}
            filteredPersons={filteredPersons}
          />
          {filteredPersons.length === 0 ? (
            <h1 className="contact_details" style={{ margin: 0 }}>
              No such person
            </h1>
          ) : (
            <ContactDetails filteredPersons={filteredPersons} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
