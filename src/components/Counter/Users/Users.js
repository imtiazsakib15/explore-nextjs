"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center py-6">
        Total User = {users.length}
      </h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {users?.map((user) => (
          <div className="bg-slate-700 rounded p-5 text-white" key={user.id}>
            <h3 className="text-2xl font-semibold">{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
