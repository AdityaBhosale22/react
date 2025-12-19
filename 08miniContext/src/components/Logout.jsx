import React from "react";
import { useContext } from "react";
import Usercontext from "../context/Usercontext";

function Logout() {
  const { user, setUser } = useContext(Usercontext);
    if (!user || user.username === "") {
        return <h2>No user is logged in</h2>;
    }

    const handleLogout = () => {
        setUser(null);
    };
    return (
        <div>
            <h2>User {user.username} is logged in</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;