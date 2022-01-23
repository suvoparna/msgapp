import React, { Component } from "react";
import { render } from "react-dom";
import { useEffect, useState, useContext } from "react";

const Contacts = () => {
  const [users, setUsers] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [frds, setFrds] = useState("");
  const [fl, setFl] = useState([]);
  const [fr,setFr]=useState("");
  const [nofr,setNofr]=useState(0)

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
          
          if(JSON.result.rfrom.length>0)
          {
            setFr(JSON.result.rfrom);
          } 
          else
          {
            setFr(null);
          }
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

  const frdRequest=()=>{
    if(fr===null){
      return (0)
    }
    else
    {
      return fr.split(" ").length
    }
  }

  return (
    <div className="frdList">
      <ul>
        {frds.split(" ").map((f) => {
          return <li>{f}</li>;
        })}
      </ul>
      <img src="https://img.icons8.com/external-color-outline-adri-ansyah/50/000000/external-friends-social-media-interface-color-outline-adri-ansyah.png"/>
      <span className="fr">{frdRequest()}</span>
    </div>
  );
};

export default Contacts;
