import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label for="text">Enter your Name:</label>
        <input type="text"
               value={name}
               id="text" 
               placeholder="Full Name" 
               style={{display: "block", width : "30vw", margin: "10px"}}
               onChange={event => setName(event.target.value)}
               required />

        <br/>

        <label for="tel">Enter your Phone:</label>
        <input type="tel"
               value={phone}
               id="tel" 
               placeholder="Phone Number - (XX) X XX-XXXX-XXXX" 
               style={{display: "block", width : "30vw", margin: "10px"}}
               onChange={event => setPhone(event.target.value)}
               pattern="^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$"
               required />

        <br/>

        <label for="email">Enter your E-Mail:</label>
        <input type="email" 
               value={email}
               id="email" 
               placeholder="E-Mail" 
               style={{display: "block", width : "30vw", margin: "10px"}}
               onChange={event => setEmail(event.target.value)} 
               required />

        <br />

        <input type="submit" 
               value="Add New Contact" 
               style={{display: "block", width : "30vw", margin: "10px", backgroundColor: "green", cursor: "pointer", color: "white"}}
               />

      </form>
    </div>
  );
};
