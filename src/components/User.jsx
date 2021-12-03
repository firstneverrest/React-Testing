import react from 'react';

const Card = ({ name, email }) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-xl p-8 w-80 my-2">
      <h5 data-testid="name">Name: {name}</h5>
      <p>Email: {email}</p>
    </div>
  );
};

export default Card;
