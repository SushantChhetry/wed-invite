import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Invite from "./Components/Main/Invite/Invite";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Nav className="nav" />
        <Invite className="invite" />
      </div>
      <Footer clasasName="footer" />
    </div>
  );
}

export default App;
