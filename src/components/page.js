import Contacts from "./contacts";
import Ncontact from "./ncontact";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      // alert(`${p.id}|${p.name}`);
      document.getElementById("logStatus").innerHTML = "Logout";
      //console.log(localStorage.getItem("email"));
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="contanier">
      <div className="contact">
        Contact List
        <hr />
        <Contacts></Contacts>
        <div className="ncontact">
          <p>New Contact</p>

          <Ncontact />
        </div>
      </div>
      <div className="msg">MSG</div>
    </div>
  );
};

export default Page;
