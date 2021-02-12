import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
/* eslint-disable react-hooks/exhaustive-deps */
const User1 = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
    salary: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="content">
      <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          back to Home
        </Link>
        <h1 className="display-4">User Id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">name: {user.name}</li>
          <li className="list-group-item">user name: {user.username}</li>
          <li className="list-group-item">email: {user.email}</li>
          <li className="list-group-item">phone: {user.phone}</li>
          <li className="list-group-item">website: {user.website}</li>
          <li className="list-group-item">salary: {user.salary}</li>
        </ul>
      </div>
    </div>
  );
};

export default User1;
