import React from 'react'

const SectionHeader = ({ title, description }) => {
  return (
    <div>
            <h2 className=' font-volkhov font-bold text-[36px] leading-auto text-black-heading mb-5 '>{title}</h2>
            <p className=' font-mulish text-[16px] leading-6.25 text-dark-60 '>{description}</p>
    </div>
  )
}

export default SectionHeader