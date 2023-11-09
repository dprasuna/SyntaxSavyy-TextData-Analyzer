import React, {useState} from "react";

export default function Form(props) {
  const[text, setText] = useState('');
  const change =(event)=>{
    setText(event.target.value)
  }
  const textSummary = () => {
    let wordCount = text.split(/\s+/g).filter((element)=>{return element.length !== 0}).length;
    let charCount = text.replace(/\s/g, "").length;
    let sentenceCount = text.split(".").filter((sentence) => sentence.trim() !== "").length;

    return `${wordCount} words and ${charCount} characters and ${sentenceCount} sentences`;
  };
  
  const uppercase =()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case successfully!", "primary")
  }
  const lowercase =()=>{
    let newText=text.toLowerCase();
    setText(newText);
     props.showAlert("Converted to Lower Case successfully!", "primary")
 }
 const capitalizeFirst = () => {
  let words = text.split(" ");
  let newText = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  setText(newText);
  props.showAlert("First Letter Capitalized successfully!", "primary");
}
  const removeSpaces=()=>{
    let newText=text.replace(/\s+/g," ").trim();
    setText(newText);
     props.showAlert("Extra spaces removed successfully!", "primary")
 }
  const copyText =()=>{
    const text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard succesfully!", "warning")
    
  }
  const clearText =()=>{
    let newText="";
    setText(newText);
      props.showAlert("Text cleared succesfully!", "danger")
  
  }
   return (
<>
<div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>        
      <h1 className="heading my-3">{props.title}</h1>
      <div className="mb-3">
        <textarea className="form-control custom-form"
        placeholder="Type here..." value={text} onChange={change} id="textArea"
          rows="7" style={{backgroundColor: props.mode ==='dark'?'rgb(220, 220, 220)':'white'}}
        />
      </div>
        <button className="btn custom-btn mx-1 my-1" onClick={uppercase} disabled={text.length===0}>Convert to UpperCase</button>

          <button className="btn custom-btn mx-1 my-1" onClick={lowercase} disabled={text.length===0}>Convert to LowerCase</button>

          <button className="btn custom-btn mx-1 my-1" onClick={capitalizeFirst} disabled={text.length===0}>Capitalize First Letter</button>

          <button className="btn custom-btn mx-1 my-1" onClick={removeSpaces} disabled={text.length===0}>Remove Extra Spaces</button>

          <button className="btn custom-btn mx-1 my-1" onClick={copyText} disabled={text.length===0}>Copy Text</button> 

          <button className="btn custom-btn clear mx-1 my-1" onClick={clearText} disabled={text.length===0}>Clear</button>
           
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{textSummary()}</p>
        
        <p>{((text.split(" ").filter((element)=>{return element.length !== 0}).length)*0.01) + " Minutes Read"} </p>
        <h3>Preview</h3>
        <p>{text ===""?'Nothing to preview': text}</p>
      </div>
      </>   
  );
}
