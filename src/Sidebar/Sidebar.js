import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import logo from "../Sidebar/image-removebg-preview.png"

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="logo-store-mehdi"></img>
        </div>
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
