import React from 'react'
import './Body.css'

function Navbar(){
    return <div className='menu' style={{backgroundColor:'#48494B'}}>

        <h1 style= {{color:'white'}}>React Meals</h1>
        <a style={{margin:'10px', color:'white'}}>Home</a>
        <a style={{margin:'10px', color:'white'}}>Order</a>
        <a style={{margin:'10px', color:'white'}}>Contact Us</a>
    </div>

}

export default Navbar