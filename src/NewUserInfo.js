import React, { useEffect, useState } from 'react';

export default function NewUserInfo() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(1);
  const userChange = (event) => {
    setUserId(event.target.value);
  };
  useEffect(() => {
    console.log('useEffect runs');
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
    return () => {
      console.log('clean up.');
    };
  }, [userId]);
  return (
    <div className="user">
      User Id:
      <input type="text" value={userId} onChange={userChange} />
      <br />
      Name: {user.name}
      <br />
      Email: {user.email}
    </div>
  );
}
