import "./App.css";
import About from "./static/About.jsx";
import Navbar from "./static/Navbar.jsx";
// import Textform from "./static/Textform.jsx";

function App() {
  return (<>
    <div>
      <Navbar title="TEXT CONVERTER" Dropdowntext = "Features" option1="Upper" option2="Lower"/>
      <div className="container my-3">
        {/* <Textform Heading="TEXT CONVERTER" /> */}
      </div>
    </div>
    <About/>
    </>
  );
}

export default App;
