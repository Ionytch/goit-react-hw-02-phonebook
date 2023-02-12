// import { Component } from "react";

// export class Phonebook extends Component


export const Phonebook = ({onSubmit, onChange, name}) => {
    return (<div>
        <h2>PHONEBOOK</h2>
        <form onSubmit={onSubmit}>
            <label for="name">
                NAME
            </label>
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={onChange}
                required
            ></input>
            <label for="number">
                TEL NUMBER
            </label>
            <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={onChange}
                required
            ></input>
            <input type="submit" value="ADD CONTACT"></input>

        </form>  
        </div>
       
    )
}