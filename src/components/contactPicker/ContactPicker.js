import React from "react";

export const ContactPicker = ({
    contacts,
    onChange
  }) => {

  return (
    <select onChange={onChange} style={{display: "block", width : "30vw", margin: "10px"}}>
      <option value="No contact is selected" selected="selected">No contact is Selected</option>
      {
        contacts && contacts.length > 0 && contacts.map( (value, index) => {
          return <option key={index} value={value.name}>{value.name}</option>
        })
      }
    </select>
  );
};
