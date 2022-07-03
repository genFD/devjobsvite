import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//1 initialize the state
const initialState = {
  loading: false,
  user: null,
};
//2 create the actions

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('./data.json', { user });
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log(`Login user : ${JSON.stringify(user)}`);
  }
);
//3 create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
});
export default userSlice.reducer;
