import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [h1, seth1]=useState("redColor")
function myfunc(){
  if(hi==="redColor"){
    seth1("blueColor")
  }else{
    seth1("redColor")
  }
  return(
    <div id="main">
      <p className={h1}> Newton School</p>
      <button id='button' onClick={myfunc}>Change Style</button>
    </div>
  )
}
}


export default App;
