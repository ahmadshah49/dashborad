import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white mt-20 p-4 w-[20%] pr-8 shadow'>
      <span className='text-2xl font-bold'>{props.icon}</span>
      <div className='pt-5 text-2xl font-bold'>{props.title}</div>
      <p className='text-sm '>{props.desc}</p>
    </div>
  )
}

export default Card
