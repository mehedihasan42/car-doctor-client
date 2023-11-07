import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const service = useLoaderData()
    const {title,img,price,description} = service

    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-2/3 shadow-2xl bg-base-100">
            <form className="card-body">
              <div className='flex justify-between'>
              <div className="form-control">
                <input type="text" value={title} className="input input-bordered lg:w-96" readOnly/>
              </div>
              <div className="form-control">
                <input type="text" value={price} className="input input-bordered lg:w-96" readOnly/>
              </div>
              </div>
              <div className='flex justify-between'>
              <div className="form-control">
                <input type="text" placeholder="first name" className="input input-bordered lg:w-96" required />
              </div>
              <div className="form-control">
                <input type="text" placeholder="last name" className="input input-bordered lg:w-96" required />
              </div>
              </div>
              <div className='flex justify-between'>
              <div className="form-control">
                <input type="email" placeholder="email" className="input input-bordered lg:w-96" required />
              </div>
              <div className="form-control">
                <input type="number" placeholder="phone number" className="input input-bordered lg:w-96" required />
              </div>
              </div>
              <textarea placeholder="message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811]">Login</button>
              </div>
            </form>
          </div>
        </div>
    );
};

export default CheckOut;