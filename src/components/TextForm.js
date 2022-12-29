import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Type here..');
  const changeToUpper=()=>{
    console.log("Clicked!! "+text);
    let newText=text.toUpperCase();
    setText(newText);
    // props.showAlert("Changed to UpperCase");
  }
  const changeToLower=()=>{
    let updatedText=text.toLowerCase();
    setText(updatedText);
    // props.showAlert("Changed to LowerCase");
  }
  const handleOnChange=(event)=>{
   // console.log("Changed!!!");
    setText(event.target.value)
  }
  return (
    <>
    <div className='container my-4'>
      <div className="form-group">
       <h1 htmlFor="formGroupExampleInput">{props.heading}</h1>
       <textarea className="form-control my-3" id="formGroupExampleInput" onChange={handleOnChange} value={text} />
      </div>
      <button className='btn btn-primary mx-2 my-1' onClick={changeToUpper}>Convert To UpperCase</button> 
      <button className='btn btn-primary mx-2 my-1' onClick={changeToLower}>Convert To LowerCase</button>
    </div>
    <div className="container">
        <h3>
            Test Summary
        </h3>
        <h4>Words: {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} and Characters: {text.length}</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
