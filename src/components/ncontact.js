import React, { Component, useState } from "react";

const Ncontact = () => {
  const [nmail, setNmail] = useState("");

  const tchange = (e) => {
    setNmail(e.target.value);
  };

  const search = () => {
    console.log(nmail);
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
    </div>
  );
};

export default Ncontact;
