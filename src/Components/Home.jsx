import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
 import { BiEditAlt } from "react-icons/bi";
 import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { deleteUser } from '../Redux/userSlice';



const Home = () => {
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteUser({id: id}))
  }
  // const dispatch = useDispatch()
  return (
    <div className='container'>
      <h2>Crud App with JSON Server</h2>
      <Link to="/create" className='btn btn-success my-3'>Create +</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary me-2'><BiEditAlt/>
                </Link>
                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(user.id)}><MdDelete/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home