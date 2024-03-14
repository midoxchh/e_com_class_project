
import "./Nav.css";

function Nav({ handleInputChange, query }){

  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <h5 style={{"textAlign":"center"}} >
          created by : mohamed mehdi chahboune <br></br>DEVOWFS 207
        </h5>
      </div>
    </nav>
  );
};

export default Nav;
