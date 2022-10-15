import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import swal from 'sweetalert2';

const initialState = {
    loading: false,
    categorys: [],
    si_category: [],
    error: ''
}

// singleCategory
export const SingleCategory = createAsyncThunk('single-category/id', (id) => {
    return axios.get(`http://127.0.0.1:8000/api/single-category/${id}`)
        .then((response) => response.data)
})
// getCategory
export const GetCategory = createAsyncThunk('category', () => {

    return axios.get('http://127.0.0.1:8000/api/category')
        .then((response) => response.data)
})
//addComponent
export const AddCategory = createAsyncThunk('category/add-category', (newCategory) => {
    return axios.post('http://127.0.0.1:8000/api/add-category', newCategory)
        .then((response) => response.data)
        .catch((err)=>{
            console.log(err)
        })
})
//update category
export const UpdateCategory = createAsyncThunk('category/update-category', ([id, Category]) => {
    console.log(Category);
    return axios.put(`http://127.0.0.1:8000/api/update-category/${id}`, Category)
        .then((response) => response.data)
        .catch((err)=>{
            console.log(err)
        })
})
const componentSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        // addCategory: AddCategory

    },
    extraReducers: (builder) => {
        builder.addCase(GetCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(GetCategory.fulfilled, (state, action) => {
            state.categorys = action.payload.category
            state.loading = false
        })
        builder.addCase(GetCategory.rejected, (state, action) => {
            state.si_category = []
            state.error = action.error.message
        })
        builder.addCase(SingleCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(SingleCategory.fulfilled, (state, action) => {
            state.si_category = action.payload.message
            state.loading = false
        })
        builder.addCase(SingleCategory.rejected, (state, action) => {
            state.error = action.error.message
        })
        builder.addCase(AddCategory.fulfilled, (state, action) => {
            state.loading = false
            swal({
                title: "success",
                text: action.payload.message,
                icon: "success",
                buttons: "Ok"
              })
        })
        builder.addCase(AddCategory.rejected, (state, action) => {
            state = []
            state.error = action.error.message
        })
        builder.addCase(UpdateCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(UpdateCategory.fulfilled, (state, action) => {
            state.loading = false
            swal({
                title: "success",
                text: action.payload.message,
                icon: "success",
                buttons: "Ok"
              })
            
        })
        builder.addCase(UpdateCategory.rejected, (state, action) => {
            state = []
            state.error = action.error.message
        })
    }
})


export default componentSlice.reducer;