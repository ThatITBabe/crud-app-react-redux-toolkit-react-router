import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Components/Data";


const userSlice = createSlice({
    name:'users',
    initialState: userList,
    reducers:{
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const {id, name, email, prof, dob} = action.payload;
            const updatedUser = state.find(user => user.id == id)
            if (updatedUser) {
                updatedUser.name = name;
                updatedUser.email = email; 
                updatedUser.prof = prof; 
                updatedUser.dob = dob; 
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const deletedUser = state.find(user => user.id == id)
            if(deletedUser) {
                return state.filter(user => user.id !== id)
            }
        }
    }
})



export const {addUser, updateUser, deleteUser} = userSlice.actions   
export default userSlice.reducer