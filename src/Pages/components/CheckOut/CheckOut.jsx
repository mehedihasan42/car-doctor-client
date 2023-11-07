import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckOut = () => {

    const service = useLoaderData()
    const {title,img,price,description} = service

    const handleSubmit = event =>{
      event.preventDefault()
      const from = event.target;
      const title = from.title.value;
      const price = from.price.value;
      const first = from.first.value;
      const last = from.last.value;
      const email = from.email.value;
      const number  = from.number.value;
      const message = from.message.value;
      console.log(title,price,first,last,email,number,message)

      const body = {title,price,first,last,email,number,message}

      fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(body)   
      })
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      )
    }

    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-2/3 shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className='flex justify-between'>
              <div className="form-control">
                <input type="text" value={title} name='title' className="input input-bordered lg:w-96" readOnly/>
              </div>
              <div className="form-control">
                <input type="text" value={price} name='price' className="input input-bordered lg:w-96" readOnly/>
              </div>
              </div>
              <div className='flex justify-between'>
              <div className="form-control">
                <input type="text" placeholder="first name" name='first' className="input input-bordered lg:w-96" required />
              </div>
              <div className="form-control">
                <input type="text" placeholder="last name" name='last' className="input input-bordered lg:w-96" required />
              </div>
              </div>
              <div className='flex justify-between'>
              <div className="form-control">
                <input type="email" placeholder="email" name='email' className="input input-bordered lg:w-96" required />
              </div>
              <div className="form-control">
                <input type="number" placeholder="phone number" name='number' className="input input-bordered lg:w-96" required />
              </div>
              </div>
              <textarea placeholder="message" name='message' className="textarea textarea-bordered textarea-lg w-full" ></textarea>
              <div className="form-control mt-6">
                <button type='submit' className="btn bg-[#FF3811]">Login</button>
              </div>
            </form>
          </div>
        </div>
    );
};

export default CheckOut;