import React from 'react'
import Form from '../(components)/sidebar/form/form'
import Table from '../(components)/sidebar/form/table/table'

const Products = () => {
  return (
    <div className='w-[80%] absolute right-0 pb-32  bg-red-100 text-White'>
      <h1 className='text-3xl font-bold m-10'>Add Products</h1>
<Form/>
<Table/>
    </div>
  )
}

export default Products
