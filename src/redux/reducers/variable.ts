import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {http_auth, http_no_auth} from "../../config/api";
import {InitialStateProps} from "../../interface/data.interface";

// export const loginUser = createAsyncThunk('variables/loginUser', async (data: AuthData, {rejectWithValue}) => {
//     try {
//         const response: AuthRes = await http_no_auth.post(`/security/auth_check`, data)
//         console.log(response)
//         // if (response.data?.data === null) return rejectWithValue(response.data.message)
//         // console.log(response.data)
//         // return response.data
//
//     } catch (error) {
//         console.log(error)
//         // if (error.response && error.response.data.message) {
//         //     return rejectWithValue(error.response.data.message)
//         // } else {
//         //     return rejectWithValue(error.message)
//         // }
//     }
// })
//
// export const variationsList = createAsyncThunk('variables/variationsList', async (data: variationsReq, {rejectWithValue}) => {
//     try {
//         const response: variationsRes = await http_auth.get(`/variations`, {
//             params: data
//         })
//         console.log(response)
//         // if (response.data?.data === null) return rejectWithValue(response.data.message)
//         // console.log(response.data)
//         // return response.data
//
//     } catch (error) {
//         console.log(error)
//         // if (error.response && error.response.data.message) {
//         //     return rejectWithValue(error.response.data.message)
//         // } else {
//         //     return rejectWithValue(error.message)
//         // }
//     }
// })

const initialState: InitialStateProps = {
    loading: false,
    value: '',
    error: '',
    success: false,
    userInfo: {},
    userToken: ''
}

const reducers = {}
export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    extraReducers: (builder) => {
        // builder.addCase(loginUser.fulfilled, (state, action) => {
        //     console.log(action)
        // })
        // builder.addCase(loginUser.pending, (state, action) => {
        //     state.loading = true;
        // })
    },
    reducers
})

export const {} = variableSlice.actions;
export default variableSlice.reducer