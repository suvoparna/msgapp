import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const log = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="header">
        MyMSGAPP
        <span id="logStatus" onClick={log}>
          Login
        </span>
      </div>
    </>
  );
};

export default Header;
