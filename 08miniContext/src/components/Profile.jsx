import React from "react";
import { useContext } from "react";
import Usercontext from "../context/Usercontext";

function Profile() {
  const { user } = useContext(Usercontext);
  if (!user || user.username === "") {
    return <h2>Please login to view profile</h2>;
  }
  return (
    <div>
      <h1>Profile: {user.username}</h1>
    </div>
  );
}

export default Profile;
