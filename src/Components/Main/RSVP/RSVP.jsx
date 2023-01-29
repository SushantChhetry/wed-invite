import { useState } from "react";
import "./RSVP.css";

const RSVP = () => {
  const containerStyle = {
    display: "flex",
    height: "100vh",
    alignItem: "center",
    justifyContent: "center",
  };
  const childStyle = { flex: 1, padding: "20px" };

  const [inputs, setInputs] = useState([{}]);

  const handleChange = (event) => {
    let fname = event.target.fname;
    let lname = event.target.lname;
    setInputs((values) => ({ ...values, fname: fname, lname: lname }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <div className="containerStyle">
      <div className="childStyle">
        <h2>Please enter your information below</h2>
        <form className="rsvp" onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type={"text"} name="fname" onChange={handleChange}></input>
          </label>
          <br />
          <label>
            Last Name:
            <input type={"text"} name="lname" onChange={handleChange}></input>
          </label>
          <br />
          <input type={"submit"} value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default RSVP;
