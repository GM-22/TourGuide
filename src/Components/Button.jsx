import React from 'react'

const Button = ({title,img, className}) => {
  return (
    <button className={` text-black-heading py-4 rounded-[40px] shadow-[#FFDA32] bg-[#FFDA32] font-extrabold text-[16px] leading-[22px] shadow-lg ${className}`}>
          <div className='flex gap-2.5 items-center'>
            <div><img src={img} /></div>
            <div>{title}</div>
          </div>
          
        </button>
  )
}

export default Button