import React from "react";
import { useState, useEffect } from 'react';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({
    contacts,
    setNewContact
  }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const contactList = contacts;
 const addNewContact = setNewContact;

 const [currentName, setName] = useState('');
 const [currentPhone, setPhone] = useState('');
 const [currentEmail, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate){
     addNewContact(currentName, currentPhone, currentEmail);

     setName('');
     setPhone('');
     setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {

    const evaluation = contactList.every( object => { return object.name !== currentName });

    if( !evaluation ){
      setDuplicate(true);
    }

    return () => {setDuplicate(false)};
  }, [contactList, currentName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={currentName}
          setName={setName}
          phone={currentPhone}
          setPhone={setPhone}
          email={currentEmail}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          duplicate={duplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          object={contactList}
        />
      </section>
    </div>
  );
};
