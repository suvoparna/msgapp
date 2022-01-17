import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const [uname, setUname] = useState("");
  const [password, setPass] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("logStatus").innerHTML = "Login";
  });

  const clear = () => {
    setUname("");
    setPass("");
  };

  const submit = () => {
    // alert(uname + "|" + password);

    let user = {
      uname,
      password,
    };

    fetch("http://localhost:3200/mlogin", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((JSON) => {
        // console.log(JSON.status);
        if (JSON.status === 0) {
          swal(
            "Oops!",
            "Username or Password not matched as per our record!",
            "error"
          );
          clear();
        } else {
          //console.log(JSON.result.email);
          // setUser(JSON.result);
          //console.log(luser);
          localStorage.setItem("login", true);
          localStorage.setItem("email", JSON.result.email);
          navigate("/");
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div className="form-row">
        <button onClick={submit}>Login</button>
      </div>
      <div className="form-row">
        Don't Have Account? <Link to={"/reg"}>Click Here</Link> To Register
      </div>
    </div>
  );
};

export default Login;
