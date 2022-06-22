import "./header.css";
import logo from "../../assets/logo.png";
import { useScrollBy } from "react-use-window-scroll";
import { Link } from "react-router-dom"
const Header = () => {
  const scrollBy = useScrollBy();
  return (
    <>
      <div className="header">
        <div className="subhead-left">
          <img src={logo} alt="Logo" />
          <Link to="/" className="routelink">
            <h1>iNFTy</h1>
          </Link>
        </div>
        <div className="subhead-right">
          <input
            type="text"
            placeholder="Search"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                alert("No result found");
              }
            }}
          />
          <button onClick={() => scrollBy({ top: 700, behavior: "smooth" })}>
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
