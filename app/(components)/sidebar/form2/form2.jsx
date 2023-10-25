"use client"
import React from 'react'
import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/app/config/firebase';
const Form2 = () => {

    const [visitor, setVisitor] = useState("")
    const [location, setLocation] = useState("")
    const [device, setDevice] = useState("")
    const [primeumVisitors, setPrimeumVisitors] = useState("")
    const [month, setMonth] = useState("")
    const onSubmitHandler = async () => {
    let data={
        visitor,
        location,
        device,
        primeumVisitors,
        month
    }
    try {
        const docRef = await addDoc(collection(db, "DashboardProducts"),data );
        console.log("Document written with ID: ");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    return (
        <div className='p-4 flex flex-wrap justify-center flex-col items-center gap-5 w-full'>
            <div className='m-4 flex gap-10'>
                <input className='p-4  border-2 rounded-md border-black' type="number" placeholder='Enter  Visitors' onChange={(e) => setVisitor(e.target.value)} />
                <input className='p-4  border-2 rounded-md border-black' type="text" placeholder='Enter Location' onChange={(e) => setLocation(e.target.value)} />
                <input className='p-4  border-2 rounded-md border-black' type="text" placeholder='Enter Device' onChange={(e) => setDevice(e.target.value)} />
            </div>
            <div className='m-4 flex gap-10'>
                <input className='p-4  border-2 rounded-md border-black' type="text" placeholder='Enter PrimeumVisitors' onChange={(e) => setPrimeumVisitors(e.target.value)} />
                <input className='p-4  border-2 rounded-md border-black' type="text" placeholder='Enter Month' onChange={(e) => setMonth(e.target.value)} />
            </div>
            <button className='pt-2 pl-4 pr-4 text-center pb-2 rounded-md w-[10rem] text-lg bg-black border-2 hover:border-black hover:text-lg transition-all duration-1000	ease-in-out	 text-white hover:bg-white hover:text-black' onClick={onSubmitHandler}>Add</button>
        </div>
    )
}

export default Form2
