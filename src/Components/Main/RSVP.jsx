import { useState } from "react";

const img = "https://picsum.photos/id/1019/1000/600/";

const RSVP = () => {
  const containerStyle = { display: "flex" };
  const childStyle = { flex: 1, padding: "20px" };
  const formStyle = {};

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
    <div>
      <h1>RSVP</h1>
      <div style={containerStyle}>
        <div style={childStyle}>
          <h2>Please enter your information below</h2>
          <form className="rsvp" onSubmit={handleSubmit}>
            <label style={formStyle}>
              First Name:
              <input type={"text"} name="fname" onChange={handleChange}></input>
            </label>
            <br />
            <label style={formStyle}>
              Last Name:
              <input type={"text"} name="lname" onChange={handleChange}></input>
            </label>
            <br />
            <input type={"submit"} value="Submit" />
          </form>
        </div>
        <div style={childStyle}>
          <img src={img} alt="form" />
        </div>
      </div>
    </div>
  );
};

export default RSVP;
