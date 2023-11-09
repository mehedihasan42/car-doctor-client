import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [cards,setCard] = useState([])
    const [asc,setAsc] = useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/services?sort=${asc? 'asc': 'desc'}`)
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[asc])

    return (
        <div className='text-center space-y-2 my-6'>
        <h1 className='text-[#FF3811] font-bold text-xl'>Service</h1>
        <p className='text-3xl font-bold text-[#151515]'>Our Service Area</p>
        <p className='text-[#737373] w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which {"don't"} look even slightly believable. </p>
        <button 
         onClick={()=>setAsc(!asc)}
        className="btn bg-[#FF3811] btn-sm">Price: {asc?'Low to High':'High to Low'}</button>
        <div
        className='grid grid-cols-3 gap-5'>
        {
            cards.map(card=><ServicesCard key={card._id} card={card}></ServicesCard>)
        }
        </div>
    </div>
    );
};

export default Services;