import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../Redux/userSlice';

const Home = () => {
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteUser({id: id}))
  }
  return (
    <div className='container'>
      <h2>Crud App with JSON Server</h2>
      <Link to="/create" className='btn btn-success my-3'>Create <i class="fa-solid fa-user-plus fa-beat"></i></Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            <th scope="col">Profession</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.prof}</td>
              <td>
                <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary me-2'><i class="fa-regular fa-pen-to-square fa-shake"></i>
                </Link>
                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(user.id)}><i class="fa-solid fa-trash fa-bounce"></i>
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