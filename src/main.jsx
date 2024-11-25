import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from '@pages/RootLayout.jsx'

import ModalProvider from '@context/ModalProvider'

import { lazy } from 'react'
import { ThemeProvider } from '@mui/material'
import theme from '@configs/muiConfigs'
import RegisterPage from '@pages/auth/RegisterPage'
import AuthLayout from '@pages/auth/AuthLayout'
import LoginPage from '@pages/auth/LoginPage'
import OTPVerifyPage from '@pages/auth/OTPVerifyPage'
import { Provider } from 'react-redux'
import store from '@redux/store'
const Home = lazy(() => import('@pages/Home.jsx'))

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
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
        <ThemeProvider theme={theme}>
            <ModalProvider>
                <RouterProvider router={router} />
            </ModalProvider>
        </ThemeProvider>
    </Provider>
)
