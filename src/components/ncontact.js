import React, { Component, useState } from "react";
import $ from "jquery";

const Ncontact = () => {
  const [nmail, setNmail] = useState("");
  const [nflist, setNflist] = useState("");

  const tchange = (e) => {
    setNmail(e.target.value);
  };

  const search = () => {
    // document.getElementById("flist").innerHTML = "";

    let user = {
      email: nmail,
      id: localStorage.getItem("email"),
    };

    //console.log(nmail);

    fetch("http://localhost:3200/flist", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((JSON) => {
        //console.log(JSON);
        if (JSON.status === 1) {
          //navigate("/login");
          //console.log(JSON.result);
          let f = JSON.result.email;
          setNflist(f);
        } else {
          setNflist("User not found");
        }
      });
  };

  // const sendRequest = () => {
  //   console.log("Send Request");
  // };

  function sendRequest() {
    console.log("Send Request");
  }

  const searchF = () => {
    if (nflist === "") {
      return <div>{nflist}</div>;
    } else if (nflist === "User not found") {
      return <div>{nflist}</div>;
    } else {
      return (
        <div>
          {nflist} <button onClick={sendRequest}>Send Friend Request</button>
        </div>
      );
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email id"
        id="nemail"
        onChange={tchange}
      />
      <button onClick={search}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAAhUlEQVQokaXQPQ5BYRCF4Qcl1kPNpXBtwEq0SsvSKC4WIBpsQZQSijuNL/n8nmaSM/PmzAx/aIoNrlHLd8NHDNFGgRMmOWCLQeIVqHLABZ3E64b/pGbUPXpJr49DLqFU7zyKpDHOmOUA6gMr9Zd2MXzH4hWUah7Q8meo9QGwRgM3rL5JAg+MoxppmCRjVQAAAABJRU5ErkJggg==" />
      </button>

      <div id="flist">{searchF()}</div>
    </div>
  );
};

export default Ncontact;
