import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../Redux/userSlice';


const Update = () => {
  const{id} = useParams();
  const users = useSelector(state => state.users);
  const existingUser = users.filter(f => f.id == id);
  const {name, email, dob, prof} = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail ] = useState(email);
  const [udob, setDOB ] = useState(dob);
  const [uprof, setProf ] = useState(prof);


  const dispatch= useDispatch();
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail,
      dob: udob,
      prof: uprof,
    }))
    navigate('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border rounded shadow bg-secondary text-white p-5 ">
            <h3>Update User</h3>
            <form onSubmit={handleUpdate}>
                <div class="mb-3">
                    <label for="name" class="form-label" placeholder='enter name'>Name:</label>
                    <input type="text" name='name' class="form-control" value={uname} onChange={e => setName(e.target.value)}/>
                </div>                
                <div class="mb-3">
                    <label for="email" name='email' class="form-label" placeholder='enter email'>Email address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={uemail} onChange={e => setEmail(e.target.value)}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="date" name='date' class="form-label" placeholder='enter dob'>Date of Birth:</label>
                    <input type="date" class="form-control" value={udob} onChange={e => setDOB(e.target.value)}/>
                </div>  
                <div class="mb-3">
                    <label for="prof" class="form-label" placeholder='wetin dey put food for your table?'>Profession:</label>
                    <input type="text" name='prof' class="form-control" value={uprof} onChange={e => setProf(e.target.value)}/>
                </div>      
                <button type="submit" class="btn btn-info w-100 text-white">Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update