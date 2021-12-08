import React from 'react';
import { Button } from 'react-bootstrap';
import { GoTrashcan } from 'react-icons/go';
import { usePeople } from '../lib/store';
import toast from 'react-hot-toast';

const PersonRow = ({ person }) => {
  const [people, setPeople] = usePeople([]);

  const onDelete = () => {
    toast((t) => console.log('toast', t)|| (
      <div>
        <p className="my-4">
          {' '}
          Delete <strong>{person.nickName}</strong>?
        </p>
        <div className="d-flex justify-content-between">
          <Button variant="secondary" onClick={() => toast.dismiss(t.id)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              const newPeople = people.filter((p) => p.id !== person.id);
              setPeople(newPeople);
              toast.dismiss(t.id)
              toast.success(`${person.nickName} deleted!`)
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    ));
  };

  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.nickName}</td>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>
        <Button onClick={onDelete} variant="danger" size="sm">
          <GoTrashcan />
        </Button>
      </td>
    </tr>
  );
};

export default PersonRow;
