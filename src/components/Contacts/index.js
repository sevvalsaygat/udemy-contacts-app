import React, { useState, useEffect } from 'react'
import List from './List'
import Form from './Form';
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Mehmet',
      phone_number: '123123'
    }, {
      fullname: 'Şevval',
      phone_number: '563265'
    }, {
      fullname: 'Nejdet',
      phone_number: '846215'
    }, {
      fullname: 'Aslı',
      phone_number: '955626'
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;