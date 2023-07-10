import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data)
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);

  return (
    <>{users.length > 0 ? <h1>{users[0]?.name}</h1> : <h1>Loading...</h1>}</>
  );
}

export default Home;
