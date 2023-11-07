import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Bookings = () => {

    const {user} = useContext(AuthContext)
    const [books,setBook] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
        .then(res=>res.json())
        .then(result=>setBook(result))
    },[])

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
                    <tr>
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
                      <button className="btn btn-ghost btn-xs">Calcle</button>
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