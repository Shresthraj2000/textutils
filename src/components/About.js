import React, {useState} from 'react'

export default function About() {
    
    const [myStyle,setmyStyle]= useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [btnHeading, setbtnHeading] = useState("Set Dark Mode");

    const [color, setColor]= useState("primary");

    const changeText=()=>{
      if(color==="primary")
        setColor("success");
      else{
        setColor("primary");
      }
    }

    const changeToDark=()=>{
    if(myStyle.color==='black'){
        setmyStyle({
            color: 'white',
            backgroundColor: 'black'
        })
        setbtnHeading("Set Light Mode");
        document.title= "DARK Mode";
    }
    else{
        setmyStyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setbtnHeading("Set Dark Mode");
        document.title= "LIGHT Mode";
    }
    }
  return (
    <>
    <div className='container my-4'>
      <div className="card" style={myStyle}>
  <div className="card-header">
    Featured
  </div>
  <div className={`card-body text-${color}`}>
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button className='btn btn-primary mx-2' onClick={changeToDark}>{btnHeading}</button>
    <div class="form-check form-switch my-3 mx-2">
  <input class="form-check-input" type="checkbox" onClick={changeText} role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Set {color}</label>
</div>
  </div>
</div>
</div>
    </>
  )
}
