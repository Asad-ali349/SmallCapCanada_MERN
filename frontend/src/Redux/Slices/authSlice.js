import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET, POST, UPDATE } from '../../api/AXIOS';
import { toast } from "react-toastify";

const LOGIN = 'login';
const PROFILE = 'profile';


export const login = createAsyncThunk(LOGIN, async (data) => {
  try {
    const response = await POST('auth/signin',data);
    toast.success("Signin Sucessfully...")
    return response.data;
  } catch (error) {
    // console.error('Error fetching disclaimer:', error);
    toast.error(error)
    throw error;
  }
});
export const fetchProfile = createAsyncThunk(PROFILE, async () => {
  try {
    const response = await GET('user/profile');
    // toast.success("Signin Sucessfully...")
    return response.data;
  } catch (error) {
    // console.error('Error fetching disclaimer:', error);
    toast.error(error)
    throw error;
  }
});


const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    loading: false,
    submitting: false,
    user: { token: null, role: '' },
    profile:{}
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('token',action.payload.token);
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.loading = false;
      })
  },
});

export const AuthSliceActions = AuthSlice.actions;

export default AuthSlice.reducer;
