import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: null,
    refreshToken: null,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        logout: () => initialState,
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
