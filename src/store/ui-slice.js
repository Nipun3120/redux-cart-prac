import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartDisplay: false, notification: ''},
    reducers: {
        toggleCartDisplay(state) {
            state.cartDisplay = !state.cartDisplay
        },
        setNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;