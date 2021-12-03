import React, { useState, useEffect } from 'react';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((error) => setError(error.message));
    };

    fetchData();
  }, []);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  if (loading) {
    return <h5 className="text-pink-500">Loading...</h5>;
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-red-300 mt-2">User Accounts</h3>
      {users.map((user) => {
        return (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            deleteUser={deleteUser}
          />
        );
      })}
    </div>
  );
}

export default App;
