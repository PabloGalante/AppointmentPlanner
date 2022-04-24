import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { useState } from 'react';

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [ contactsData, setContact ] = useState([]);
  const [ appointmentsData, setAppointment ] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const setNewContact = (name, phone, email) => {
    setContact([...contactsData, 
      {
        name: name,
        phone: phone,
        email: email
      }]
    )
  };

  const setNewAppointment = (title, contact, date, time) => {
    setAppointment([...appointmentsData,
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      }]
    )
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
              <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contactsData} setNewContact={setNewContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage contacts={contactsData} appointments={appointmentsData} setNewAppointment={setNewAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
