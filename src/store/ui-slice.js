import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartDisplay: false},
    reducers: {
        toggleCartDisplay(state){
            state.cartDisplay = !state.cartDisplay
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;