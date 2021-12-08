import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import createPersistedState from 'use-persisted-state';

const PersonForm = () => {
  const [id, setId] = useState(nanoid(10));

  const usePeople = createPersistedState('people');
  const [people, setPeople] = usePeople([]);

  const [submitDisabled, setSubmitDisabled] = useState(false);

  const onSubmit = (event) => {
    setSubmitDisabled(true);
    event.preventDefault();
    const values = event.target.elements;
    const fields = ['id', 'nickName', 'firstName', 'lastName'];
    const payLoad = fields.reduce(
      (acc, current) => ({ ...acc, [current]: values[current].value }),
      {}
    );
    const newPeople = [...people, payLoad];
    setPeople(newPeople);

    event.target.reset();
    setId(nanoid(10));

    setSubmitDisabled(false);
  };

  return (
    <>
      <h1>Contacts Form</h1>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control disabled name="id" type="text" value={id} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            name="nickName"
            type="text"
            placeholder="i.e.: Panicz"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="i.e.: Maciej"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="i.e.: Sraciej"
          />
        </Form.Group>

        <Button disabled={submitDisabled} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default PersonForm;
