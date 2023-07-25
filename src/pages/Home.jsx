import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);

  //const pixels = "3px";
  return (
    <>
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.name}
        />
      ))}
    </>
  );
}

export default Home;
// <div key={user.id} style={{ border: `${pixels} solid black` }}>
//   <div>{user?.id}</div>
//   <div>{user?.name}</div>
//   <div>{user?.email}</div>
//   <div>{user?.username}</div>
// </div>
