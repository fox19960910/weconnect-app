import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import RootLayout from '@pages/RootLayout.jsx'

import Dialog from '@components/Dialog'
import theme from '@configs/muiConfigs'
import { ThemeProvider } from '@mui/material'
import AuthLayout from '@pages/auth/AuthLayout'
import LoginPage from '@pages/auth/LoginPage'
import OTPVerifyPage from '@pages/auth/OTPVerifyPage'
import RegisterPage from '@pages/auth/RegisterPage'
import ProtectedLayout from '@pages/ProtectedLayout'
import store, { persistor } from '@redux/store'
import { lazy } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
const Home = lazy(() => import('@pages/Home.jsx'))

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                element: <ProtectedLayout />,
                children: [
                    {
                        path: '/',
                        element: <Home />,
                    },
                ],
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: '/register',
                        element: <RegisterPage />,
                    },
                    {
                        path: '/login',
                        element: <LoginPage />,
                    },
                    {
                        path: '/otp',
                        element: <OTPVerifyPage />,
                    },
                ],
            },
        ],
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={<p>loading..</p>} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
                <Dialog />
            </ThemeProvider>
        </PersistGate>
    </Provider>
)
