import React, { Component } from 'react'
export default class secondpage extends Component {
  render() {
    return (
  
<div className='div_basic'>
          <form className='form1' action="">
            <label id='lbl1' htmlFor="">Sign Up</label>
            <br />
            <input id='inp1' type="text" placeholder='Ism' />
            <input  type="checkbox" name='' id='check1'  />
            <br />
            <Link to="/secondpage" id='btn1'>Sign Up</Link>
        </form>
</div>
    )
  }
}
