import React, { Component } from 'react'
import '../css/firstpage.css'
import { Link } from 'react-router-dom'
export default class firstpage extends Component {
  render() {
    return (
   
<body>
  
<div className='div_basic'>
      <form className='form1' action="">

<label id='lbl1' htmlFor="">Sign Up</label>
<br />
<input id='inp1' type="text" placeholder='Ism' />
<br />
<input id='inp23' type="text" placeholder='Email' />
<br />
<input id='inp3' type="text" placeholder='Address' />
<br />
<input inp4 type="text" placeholder='parol' />
<br />
<input  type="checkbox" name='' id='check1'  />
<span id='span1'>Rember me</span>
<Link to="/secondpage" id='btn1'>Sign Up</Link>
<br />





      </form>

</div>

</body>









    )
  }
}
