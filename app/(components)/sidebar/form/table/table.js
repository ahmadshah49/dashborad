"use client"
import React from 'react'
import { collection, getDocs,deleteDoc,doc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { db } from '@/app/config/firebase';
const Table = () => {
  const [data, setData] = useState([])
  const [id, setId] = useState("")
  const fetchDocs = async () => {
    try {
      const docs = await getDocs(collection(db, "Dashboard"));
      const tableData = []
      docs.forEach((doc) => {
        tableData.push({
          id: doc.id,
          ...doc.data()
        })
        setData(tableData)
      });

    } catch (error) {
      alert(error, "An Error Occoured")
    }
  }
  useEffect(() => {
    fetchDocs()
  }, [])
const onDeleteHandler=async(id)=>{
setId(id)
await deleteDoc(doc(db, "Dashboard", id));
fetchDocs()
}
  return (
    <div>
      <h1 className='text-3xl font-bold m-10'>Data</h1>
  <div className='flex justify-center  items-center'>
  <table className='table-auto   w-[80%] text-center'>
        <tr className='text-2xl'>
          <th>Product id</th>
          <th>Premium Visitors</th>
          <th>Visitors</th>
          <th>Products</th>
          <th>Sales</th>
          <th>Delete</th>
        </tr>
        {
          data.map((input, key) => {
            return (
              <tr key={key} className='text-lg font-bold'>
                <td>{input.id.slice(0,5)}...</td>
                <td>{input.premium}</td>
                <td>{input.visitors}</td>
                <td>{input.products}</td>
                <td>{input.sales}</td>
                <td><button className='border-b-2 border-black' onClick={()=>onDeleteHandler(input.id)}>Delete</button></td>
              </tr>
            )
          })
        }
      </table>
  </div>
    </div>
  )
}

export default Table
