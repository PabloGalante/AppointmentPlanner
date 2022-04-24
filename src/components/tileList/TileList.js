import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {

  const objectsArray = props.object;

  return (
    <div>
      {objectsArray.length > 0 && objectsArray.map( (object, index) => {
          return <Tile objectData={object} key={index} />
        })
      }
    </div>
  );
};
