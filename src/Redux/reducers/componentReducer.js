import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: 'Navbar',
        discription: 'The Nav bar displays information and actions relating to the current screen.'
    },
    {
        id: 2,
        title: 'Radio Button',
        discription: 'The Nav bar displays information and actions relating to the current screen.'
    },
    {
        id: 3,
        title: 'CheckBox',
        discription: 'The Nav bar displays information and actions relating to the current screen.'
    },
    {
        id: 4,
        title: 'Rating',
        discription: 'The Nav bar displays information and actions relating to the current screen.'
    },
    {
        id: 5,
        title: 'Button',
        discription: 'The Button comes with three variants: text (default), contained, and outlined.'
    },
    {
        id: 6,
        title: 'Card',
        discription: 'The Nav bar displays information and actions relating to the current screen.'
    },
    {
        id: 7,
        title: 'Grid',
        discription: 'The Nav bar displays information and actions relating to the current screen.'

    },
    {
        id: 8,
        title: 'Slider',
        discription: 'The Nav bar displays information and actions relating to the current screen.'

    },
    {
        id: 9,
        title: 'Menu',
        discription: 'The Nav bar displays information and actions relating to the current screen.'

    },
    {
        id: 10,
        title: 'Link',
        discription: 'The Nav bar displays information and actions relating to the current screen.'

    },
    {
        id: 11,
        title: 'Drop Down',
        discription: 'The Nav bar displays information and actions relating to the current screen.',

    },
    {
        id: 12,
        title: 'Modal',
        discription: 'The Nav bar displays information and actions relating to the current screen.'

    }
]

//addComponent
const AddComponent = (state, action) =>{
    const idd = Math.floor(Math.random() * 1000);
    const newComponent = action.payload
    newComponent.id = idd
    state.push(action.payload)
}

const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        addComponent: AddComponent
    }
})
export const { addComponent } = componentSlice.actions;

export default componentSlice.reducer;