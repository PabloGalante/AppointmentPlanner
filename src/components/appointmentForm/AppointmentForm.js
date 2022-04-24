import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>

        <label for="title">Enter the Title:</label>
        <input type="text"
               value={title}
               id="title" 
               placeholder="Title" 
               style={{display: "block", width : "30vw", margin: "10px"}}
               onChange={event => setTitle(event.target.value)}
               required />

        <br/>

        <label for="date">Enter Date:</label>
        <input type="date"
               value={date}
               id="date" 
               placeholder="Date" 
               style={{display: "block", width : "30vw", margin: "10px"}}
               onChange={event => setDate(event.target.value)}
               min={getTodayString()}
               required />

        <br/>

        <label for="time">Enter Time:</label>
        <input type="time" 
               value={time}
               id="time" 
               placeholder="Time" 
               style={{display: "block", width : "30vw", margin: "10px"}}
               onChange={event => setTime(event.target.value)} 
               required />

        <br />

        <ContactPicker contacts={contacts} onChange={event => setContact(event.target.value)} />

        <br />

        <input type="submit" 
               value="Add New Appointment" 
               style={{display: "block", width : "30vw", margin: "10px", backgroundColor: "green", cursor: "pointer", color: "white"}}
               />

    </form>
  );
};
