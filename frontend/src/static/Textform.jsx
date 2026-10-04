import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [fontFamily, setFontFamily] = useState("sans-serif");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handlelowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  
  const clear = () => {
    let newtext = "";
    setText(newtext);
  };

  // 2. FIXED: Kept only ONE handleColorClick function
  const handleColorClick = () => {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setTextColor(colors[randomIndex]);
  };

  const handleFontClick = () => {
    const fonts = [
      "Arial", "Courier New", "Georgia", "Times New Roman", 
      "Verdana", "Comic Sans MS", "Impact", "Trebuchet MS"
    ];
    const randomIndex = Math.floor(Math.random() * fonts.length);
    setFontFamily(fonts[randomIndex]);
  }

  // FIXED: Kept only ONE handleOnChange function
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    
    <>
      <h1>{props.Heading}</h1>
      <form>
        <div className="form-group">
          <textarea  className="form-control" style={{ color: textColor, fontFamily: fontFamily}} value={text} onChange={handleOnChange} id="mybox" rows="9"></textarea>
        </div>
        <div className="button">
          <button type="button" className="btn btn-danger  my-4 mx-2" onClick={handleUpClick}>Convert to Lowercase</button>
          <button type="button" className="btn btn-danger  my-4 mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
          <button type="button" className="btn btn-danger  my-4 mx-2" onClick={clear}>Clear</button>
          <button type="button" className="btn btn-danger  my-4 mx-2" onClick={handleColorClick}>ChangeColor</button>
          <button type="button" className="btn btn-danger  my-4 mx-2" onClick={handleFontClick}>FontChange</button>
        </div>
      </form>

      <div className="container">
       
      </div>
      
      <div className="container my-3">
        <h2>Preview</h2>
         <p><b>{text.split(" ").length} word and {text.length} character</b></p>
         <p><b>{0.008 * text.split(" ").length} (Minutes To Read )</b></p>
      </div>
      <div className="container"><p>{text}</p></div>
    </>
  );
}
