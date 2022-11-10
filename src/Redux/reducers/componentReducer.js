import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import swal from 'sweetalert';

const initialState = {
    loading: false,
    components: [],
    si_component: [],
    error: ''
}

// singlecomponent
export const SingleComponent = createAsyncThunk('single-component/id', (id) => {
    return axios.get(`http://127.0.0.1:8000/api/single-component/${id}`)
        .then((response) => response.data)
})
// getcomponent
export const GetComponent = createAsyncThunk('component', () => {

    return axios.get('http://127.0.0.1:8000/api/component')
        .then((response) => response.data)
})
//addComponent
export const AddComponent = createAsyncThunk('component/add-component', (newComponent) => {
    return axios.post('http://127.0.0.1:8000/api/add-component', newComponent)
        .then((response) => response.data)
})
//update component
export const UpdateComponent = createAsyncThunk('component/update-component', ([id, component]) => {
    console.log(component);
    return axios.put(`http://127.0.0.1:8000/api/update-component/${id}`, component)
        .then((response) => response.data)
})
const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        // addcomponent: Addcomponent

    },
    extraReducers: (builder) => {
        builder.addCase(GetComponent.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(GetComponent.fulfilled, (state, action) => {
            state.components = action.payload.component
            state.loading = false
        })
        builder.addCase(GetComponent.rejected, (state, action) => {
            state.si_component = []
            state.error = action.error.message
        })
        builder.addCase(SingleComponent.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(SingleComponent.fulfilled, (state, action) => {
            state.si_component = action.payload.message
            state.loading = false
        })
        builder.addCase(SingleComponent.rejected, (state, action) => {
            state.error = action.error.message
        })
        builder.addCase(AddComponent.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(AddComponent.fulfilled, (state, action) => {
            state.loading = false
            swal({
                title: "success",
                text: action.payload.message,
                icon: "success",
                buttons: "Ok"
            })
        })
        builder.addCase(AddComponent.rejected, (state, action) => {
            state = []
            state.error = action.error.message
        })
        builder.addCase(UpdateComponent.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(UpdateComponent.fulfilled, (state, action) => {
            state.loading = false
            swal({
                title: "success",
                text: action.payload.message,
                icon: "success",
                buttons: "Ok"
            })

        })
        builder.addCase(UpdateComponent.rejected, (state, action) => {
            state = []
            state.error = action.error.message
        })
    }
})


export default componentSlice.reducer;