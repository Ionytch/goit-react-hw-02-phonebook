// import { Component } from "react";

import { ContactsList } from "./Contacts.styled"

 function Contacts ({names, onDeleteContact}) {
           return (
            <ContactsList>
                   {
                       names.map(name => (
                           <li key={name.id}>
                               <p>{name.name}:{name.number}</p>
                               
                <button onClick={()=>onDeleteContact(name.id)}>DELETE</button>
                </li>))}
            </ContactsList>
        )
    
}

export default Contacts
