import React from "react";

export const Tile = (props) => {

  const dataObject = props.objectData;

  return (
    <div className="tile-container">
      {
        Object.values(dataObject).map( (value,index) => {
          if( index === 0 ){
            return <p className="tile-title" key={index}>{value}</p>
          }
            return <p className="tile" key={index}>{value}</p>
        })
      }
    </div>
  );
};
