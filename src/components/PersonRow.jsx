import React from 'react';

const PersonRow = ({person}) => {
  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.nickName}</td>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
    </tr>
  );
};

export default PersonRow;