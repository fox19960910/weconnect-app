import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '@redux/slices/authSlice'
import snackbarReducer from '@redux/slices/snackbarSlice'
import settingREducer from '@redux/slices/settingSlice'
import dialogReducer from '@redux/slices/dialogSlice'
import { rootApi } from '@services/rootApi'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import { logoutWithMiddleware } from './middleware'

const persisConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [
        rootApi.reducerPath,
        settingREducer.reducerPath,
        dialogReducer.reducerPath,
    ],
}
const persistedReducer = persistReducer(
    persisConfig,
    combineReducers({
        auth: authReducer,
        snackbar: snackbarReducer,
        settings: settingREducer,
        dialog: dialogReducer,
        [rootApi.reducerPath]: rootApi.reducer,
    })
)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(logoutWithMiddleware, rootApi.middleware)
    },
})
export default store
export const persistor = persistStore(store)
