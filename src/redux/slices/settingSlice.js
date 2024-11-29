import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowDrawer: false,
}
export const settingSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleDrawer: (state) => {
            state.isShowDrawer = !state.isShowDrawer
        },
    },
})

export const { toggleDrawer } = settingSlice.actions
export default settingSlice.reducer
