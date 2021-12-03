import react from 'react';

const Card = ({ id, name, email, deleteUser }) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-xl p-8 w-80 my-2">
      <h5 data-testid="name">Name: {name}</h5>
      <p>Email: {email}</p>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </div>
  );
};

export default Card;
