// import { Component } from "react";

 function Contacts ({names, onDeleteContact}) {
           return (
            <ul>
                   {
                       names.map(name => (
                           <li key={name.id}>
                               <p>{name.name}:{name.number}</p>
                               
                <button onClick={()=>onDeleteContact(name.id)}>DELETE</button>
                </li>))}
            </ul>
        )
    
}

export default Contacts
