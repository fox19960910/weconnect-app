import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@redux/slices/authSlice'
import snackbarReducer from '@redux/slices/snackbarSlice'
import { rootApi } from '@services/rootApi'
const store = configureStore({
    reducer: {
        auth: authReducer,
        snackbar: snackbarReducer,
        [rootApi.reducerPath]: rootApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(rootApi.middleware)
    },
})
export default store
