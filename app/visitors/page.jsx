import React from 'react'
import Form2 from '../(components)/sidebar/form2/form2'
import Table2 from '../(components)/table2/table2'

const Visitors = () => {
  return (
    <div className='w-[80%] absolute h-[200vh] right-0    bg-red-100'>
    <h1 className='text-3xl font-bold m-10'>Add Visitors</h1>
      <Form2/>
      <Table2/>

    </div>
  )
}

export default Visitors
