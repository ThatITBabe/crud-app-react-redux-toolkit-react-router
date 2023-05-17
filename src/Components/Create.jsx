import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { addUser } from '../Redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const users = useSelector(state => state.users);
        // console.log(users)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
        navigate('/')

    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border rounded shadow bg-secondary text-white p-5 ">
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label" placeholder='enter name'>Name:</label>
                    <input type="text" name='name' class="form-control" onChange={e => setName(e.target.value)}/>
                </div>                
                <div class="mb-3">
                    <label for="email" name='email' class="form-label" placeholder='enter email'>Email address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>                
                <button type="submit" class="btn btn-info w-100 text-white">Submit</button>
            </form>
        {/* </Link> */}
        </div>
    </div>
  )
  }

export default Create