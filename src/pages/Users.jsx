import { useParams } from "react-router-dom";
//import React, { useEffect } from "react";

function Users() {
  const { username } = useParams();
  
  return <h1>{username}</h1>;
}

export default Users;



//   useEffect(() => {
//   //fetch(`https://api.instagram.com/${username}`)
// },[])
//   console.log(username)

