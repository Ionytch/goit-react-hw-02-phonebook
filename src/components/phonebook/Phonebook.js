import { Component } from "react";

// export class Phonebook extends Component


export const Phonebook = () => {
    return (<div>
        <h2>PHONEBOOK</h2>
        <form>
            <label for="phone">
                PHONE NUMBER
            </label>
            <input type="tel" id="phone" name="phone"></input>
            <input type="submit" value="ADD PHONE"></input>

        </form>  
        </div>
       
    )
}