import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Reg = () => {
  const [uname, setUname] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const submit = () => {
    let user = {
      uname,
      password,
      email,
    };

    fetch("http://localhost:3200/mreg", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((JSON) => {
        //console.log(JSON);
        if (JSON.status === 1) {
          navigate("/login");
        }
      });
  };

  return (
    <div className="logDiv">
      <div className="form-row">
        <input
          type="text"
          placeholder="User Name"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-row">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div className="form-row">
        <button onClick={submit}>Register</button>
      </div>
    </div>
  );
};

export default Reg;
