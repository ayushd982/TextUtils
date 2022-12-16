import React , {useState} from 'react'

export default function Textforms(props){

  const handleUpchange = () =>
  {
    // console.log("return the value in console" + Text);
    
     let newtext = Text.toUpperCase();
     NewText(newtext)
     props.showAlert("Converted to uppercase!" , "success");
  }
  const handleLochange = () =>
  {
    // console.log("return the value in console" + Text);
     let newtext = Text.toLowerCase();
     NewText(newtext)
     props.showAlert("Converted to lowercase!" , "success");
  }

  const handlextraspaces = () => {
   let newtext = Text.split(/[ ]+/);
   NewText(newtext.join(" "))
   props.showAlert("Extra spaces removed!" ,"success");
  }
  const handleClearchange = () =>
  {
    // console.log("return the value in console" + Text);
     let newtext = "";
     NewText(newtext);
     props.showAlert("Clear Text!" ,"success");
  }

  const handlecopy = () => {
    console.log("I am copy");
    var Text = document.getElementById("my-box");
    Text.select();
    Text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(Text.value);
    props.showAlert("Copied to Clipboard !", "success");
  }
  const handleup = (event) =>
  {
    console.log("Newtext");
    NewText(event.target.value);
  }
  const[Text , NewText] = useState("")
  return (
   <>
  <div className = "container" style ={{color : props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.Heading} </h1>
    <div className="mb-3">
   <textarea className="form-control" value = {Text} onChange = {handleup} style= {{backgroundColor: props.mode==='dark'?'grey':'white' , color : props.mode==='dark'?'white':'#042743'}} id="my-box" rows="9"></textarea>
     </div>
    <button className = "btn btn-dark mx-2" onClick = {handleUpchange}>Convert into Upper</button>
    <button className = "btn btn-dark mx-2 " onClick = {handleLochange}>Convert into Lower</button>
    <button className = "btn btn-dark mx-2" onClick = {handleClearchange}>Clear Text</button>
    <button className = "btn btn-dark mx-2" onClick = {handlecopy}>Copy Text</button>
    <button className = "btn btn-dark mx-2" onClick = {handlextraspaces}>Remove extra space</button>
    
    </div>
   <div className="container my-3" style= {{color: props.mode==='dark'?'white':'#042743'}}>
     <h1>Your Text Summary </h1>
      <p>{Text.split(" ").length} words and {Text.length} characters</p>
      <p>{0.008*Text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{Text.length>0?Text: "Enter something to preview it here"}</p>
    
    </div>
    </>
  )
}
