import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// i have to get the user's token from localStorage.

//const user = JSON.parse(localStorage.getItem('user'));
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user : user ? user : null,
    isError :false,
    isSuccess : false,
    isLoading :false,
    message :''
};

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset : (state) =>{
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers : () =>{}
})

export const { reset } = authSlice.actions
export default authSlice.reducer