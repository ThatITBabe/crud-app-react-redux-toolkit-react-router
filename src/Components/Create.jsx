import React, { useState } from 'react'
import { addUser } from '../Redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [prof, setProf] = useState('');

    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email, dob, prof}))
        navigate('/')

    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border rounded shadow bg-secondary text-white p-5 ">
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" name='name' class="form-control" onChange={e => setName(e.target.value)} placeholder='enter name'/>
                </div>                
                <div class="mb-3">
                    <label for="email" name='email' class="form-label">Email address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} placeholder='enter email'/>
                    <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div>
                </div>                
                <div class="mb-3">
                    <label for="date" name='date' class="form-label">Date of Birth:</label>
                    <input type="date" class="form-control" onChange={e => setDOB(e.target.value)} placeholder='enter dob'/>
                </div> 
                <div class="mb-3">
                    <label for="prof" class="form-label">Profession:</label>
                    <input type="text" name='prof' class="form-control" onChange={e => setProf(e.target.value)} placeholder='wetin dey put food for your table'/>
                </div>               
                <button type="submit" class="btn btn-info w-100 text-white">Submit</button>
            </form>
        </div>
    </div>
  )
  }

export default Create