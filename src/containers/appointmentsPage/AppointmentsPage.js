import React from "react";
import { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
    contacts,
    appointments,
    setNewAppointment
  }) => {
  /*
  Define state variables for 
  appointment info
  */
 const listOfContacts = contacts;
 const listOfAppointments = appointments;
 const newAppointment = setNewAppointment;

 const [currentTitle, setTitle] = useState('');
 const [currentContact, setContact] = useState('');
 const [currentDate, setDate] = useState('');
 const [currentTime, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   newAppointment(currentTitle, currentContact, currentDate, currentTime);

   setTitle('');
   setContact('');
   setDate('');
   setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={currentTitle}
          contacts={listOfContacts}
          contact={currentContact}
          date={currentDate}
          time={currentTime}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          object={listOfAppointments} />
      </section>
    </div>
  );
};
