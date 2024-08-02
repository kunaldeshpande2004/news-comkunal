import React,{useState} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default  function NavBar(props){
    const [count,setCount]=useState("white");
    const [txt,setTxt]=useState("Enable");

   function fun (){
    setCount(count.toUpperCase());
  
}
function chg(event){
   setCount(event.target.value);
}

function cpy(){
    let tx=document.querySelector("input");
    tx.select();
    navigator.clipboard.writeText(tx.value);
    document.getSelection().removeAllRanges();
    document.title="chapa";
 }
 
let nav=document.querySelector(".nav");
function mode(){
    if(txt=="Enable"){
        setCount("black");
       nav.style.backgroundColor="black";
       setTxt("Disable");
    }
   
    else{
        setCount("white");
        nav.style.backgroundColor="white";
        setTxt("Enable");

    }
   
 }
    return(
        <div className='nav' style={{backgroundColor:count}}>
         <nav >
        <Link to="/">{props.title}</Link>
        <input type="text" value={count} onChange={chg} />
        <button onClick={fun}>click here</button>
        <button onClick={mode}>click here to {txt} Dark Mode</button>
        <button onClick={cpy}>click here to copy</button>
          </nav>
          <p>{count.split(" ").filter((x)=>{ return x.length!=0 }).length}words,{count.length} characters</p>
        </div>
       
    );     
}

NavBar.propTypes={
    title:PropTypes.string.isRequired
}
NavBar.defaultProps={
    title:"bhul gaya"
}