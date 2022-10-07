import React from 'react'

const Character = (data: any) => {

  return (
    <div key={data.id}>
      <h2>{data.image}</h2>
    </div>
  );

};

export default Character;