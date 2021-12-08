import React from 'react';
import { Table } from 'react-bootstrap';
import { usePeople } from '../lib/store';
import PersonRow from './PersonRow';

const PeopleList = () => {
  const [people, setPeople] = usePeople([]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nick Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {people.map((person) => (
            <PersonRow key={person.id} person={person}/>
          ))}

        </tbody>
      </Table>
    </>
  );
};

export default PeopleList;
