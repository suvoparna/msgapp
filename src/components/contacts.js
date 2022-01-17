import React, { Component } from "react";
import { render } from "react-dom";
import { useEffect, useState, useContext } from "react";

const Contacts = () => {
  const [users, setUsers] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [frds, setFrds] = useState("");
  const [fl, setFl] = useState([]);

  // var cons = [
  //   { name: "SK", email: "sk@abc.com" },
  //   { name: "PN", email: "pn@abc.com" },
  // ];

  async function fetchData() {
    let user = {
      email: localStorage.getItem("email"),
    };

    await fetch("http://localhost:3200/flist", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((JSON) => {
        if (JSON.status === 0) {
          setErrors(JSON.status);
        } else {
          // console.log(JSON.result.frds);
          setFrds(JSON.result.frds);
          setUsers(JSON.result);
        }
        setLoading(false);
      });

    //setFrds(users.frds);
    //setFrds(frds.split(","));
  }

  // let friedns = () => {
  //   let nf = frds.split(" ");
  //   setFl(nf);
  //   console.log(nf);
  // };

  useEffect(() => {
    fetchData();
    //friedns();
    //console.log(frds);
  }, []);

  return (
    <div className="frdList">
      <ul>
        {frds.split(" ").map((f) => {
          return <li>{f}</li>;
        })}
      </ul>
    </div>
  );
};

export default Contacts;
