import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '@components/Loading'
// Supports weights 100-900
import '@fontsource-variable/public-sans'
import { Alert, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeSnackbar } from '@redux/slices/snackbarSlice'
const RootLayout = () => {
    const { open, message, type } = useSelector((state) => state.snackbar)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(closeSnackbar())
    }
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
            <Snackbar open={open} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={type}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default RootLayout
