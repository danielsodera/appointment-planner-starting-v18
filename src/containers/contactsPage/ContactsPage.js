import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = ({contacts, handleAddContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState(""); 

 function handleSubmit(e) {
  e.preventDefault();
  
  const newName = e.target.name.value;
  const newPhone = e.target.phone.value;
  const newEmail = e.target.email.value;

  // Check if the new name already exists in the contacts list
  const isDuplicate = contacts.some(contact => contact.name === newName);

  if (!isDuplicate) {
    // Add the new contact
    const newContact = { name: newName, phone: newPhone, email: newEmail }; 
    handleAddContact(newContact);
    // Optionally clear the form fields
    setName('');
    setPhone('');
    setEmail('');
  } else {
    alert("Duplicate contact exists");
  }
}


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
            name={name} phone={phone} email={email}
            setName={setName} setPhone={setPhone} setEmail={setEmail}
            handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
