import React from 'react'
import './Info.css'
function Info() {
  return (
    <div className='detalles-container'>
    <span className='nombre'>Standard Captus</span>
    <span className='descripcion'>Succulent</span>
    <span className='precio'>$20.0</span>
    <div className='sore'>
        <img src="./static/image/star.jpg" alt="" />
        <img src="./static/image/star.jpg" alt="" />
        <img src="./static/image/star.jpg" alt="" />
        <img src="./static/image/star.jpg" alt="" />
        <span>2 reviews</span>
    </div>
</div>
  )
}

export default Info
