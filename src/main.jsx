import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from '@pages/RootLayout.jsx'

import ModalProvider from '@context/ModalProvider'

import { lazy } from 'react'
import { ThemeProvider } from '@mui/material'
import theme from '@configs/muiConfigs'
import RegisterPage from '@pages/RegisterPage'
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
                path: '/register',
                element: <RegisterPage />,
            },
        ],
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <ModalProvider>
            <RouterProvider router={router} />
        </ModalProvider>
    </ThemeProvider>

    // </React.StrictMode>
)
