import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Bookings = () => {

    const {user} = useContext(AuthContext)
    const [books,setBook] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/booking?email=${user?.email}`,{
          headers:{
            authorization: lo
          }
        })
        .then(res=>res.json())
        .then(result=>setBook(result))
    },[])

    const handleDelete = _id =>{
        fetch(`http://localhost:5000/booking/${_id}`,{
            method:'DELETE'
        })
    }

    const handleUpdate = _id =>{
      fetch(`http://localhost:5000/booking/${_id}`,{
        method:'PATCH',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify({status:'confirm'})
      })
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
        if(result.modifiedCount === 1){
          const remaining = books.filter(book=>book._id===id)
          const updated = books.find(book=>book._id===id)
          updated.status === 'confirm'
          const newBookings = [updated,...remaining]
          setBook(newBookings)
        }
      })
    }

    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
                books.map(book=>
                    <tr key={book._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{book.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                     {book.price}
                    </td>
                    <th>
                      <button onClick={()=>handleDelete(book._id)} className="btn btn-ghost btn-xs">Calcel</button>
                    </th>
                    <th>
                      {
                        book.status === 'confirm'?<span className='font-bold text-primary'>confirmed</span>:<button onClick={()=>handleUpdate(book._id)} className="btn btn-ghost btn-xs">Confirm</button>
                      }
                    </th>
                  </tr>
                    )
            }
          </tbody>
        </table>
      </div>
    );
};

export default Bookings;