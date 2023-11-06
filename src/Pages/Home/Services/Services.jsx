import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [cards,setCard] = useState([])
    useEffect(()=>{
       fetch('public.json')
       .then(res=>res.json())
       .then(data=>setCard(data))
    },[])
    return (
        <div className='text-center space-y-2 my-6'>
            <h1 className='text-[#FF3811] font-bold text-xl'>Service</h1>
            <p className='text-3xl font-bold text-[#151515]'>Our Service Area</p>
            <p className='text-[#737373] w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which {"don't"} look even slightly believable. </p>
            <div className='grid grid-cols-3 gap-5'>
            {
                cards.map(card=><ServicesCard key={card._id} card={card}></ServicesCard>)
            }
            </div>
        </div>
    );
};

export default Services;