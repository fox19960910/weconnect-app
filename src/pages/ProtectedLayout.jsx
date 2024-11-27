import Header from '@components/Header'
import { CircularProgress } from '@mui/material'
import { saveUserInfo } from '@redux/slices/authSlice'
import { useGetAuthUserQuery } from '@services/rootApi'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
// Supports weights 100-900
const ProtectedLayout = () => {
    const dispatch = useDispatch()
    const { data, isLoading, isSuccess } = useGetAuthUserQuery()
    console.log('checkuser', data?._id)

    useEffect(() => {
        if (isSuccess && data) dispatch(saveUserInfo(data))
    }, [data, dispatch, isSuccess])
    if (isLoading) return <CircularProgress />
    if (!data?._id) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default ProtectedLayout
