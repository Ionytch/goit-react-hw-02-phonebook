import { Phonebook } from "./phonebook/Phonebook";
import { Component } from "react";
import { nanoid } from 'nanoid'
import Contacts from "./contacts/Contacts";

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  addContact = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    console.log(`Login: ${name}, Email: ${number}`);
    const newContact = { id: nanoid(), name, number };
    console.log(newContact);
    this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
    // this.props.onSubmit({ ...this.state });
    this.reset();
  
  }

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  // addContact = ({ name, number }) => {
  //   // evt.preventDefault();
  //   const { contacts } = this.state;
  //   const newContact = { id: nanoid(), name, number };
  //   console.log(newContact);

  //   contacts.some(contact => contact.name === name)
  //     ? alert(
  //         `${name}`,
  //         'This user is already in the contact list.',
  //         'OK'
  //       ) :
  //     this.setState(({ contacts }) => ({
  //         contacts: [newContact, ...contacts],
  //       }));
  // };

  deleteContact =contactId => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact=>contact.id!==contactId),
    })
      )
  }

  render() {
    console.log(this.state);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Phonebook onSubmit={this.addContact} onChange={this.handleChange}  />
        <Contacts names={this.state.contacts} onDeleteContacts={this.deleteContact}/>
      </div>
    );
  }
}
export default App