import React, { useState, useEffect } from 'react';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  if (users.length === 0) {
    return <h5 className="text-pink-500">Loading...</h5>;
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-red-300 mt-2">User Account</h3>
      {users.map((user) => {
        return <User key={user.id} name={user.name} email={user.email} />;
      })}
    </div>
  );
}

export default App;
