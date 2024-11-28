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
    const response = useGetAuthUserQuery()
    console.log('checkuser', { response })

    useEffect(() => {
        if (response?.isSuccess && response?.data)
            dispatch(saveUserInfo(response?.data))
    }, [response.data, dispatch, response.isSuccess])
    if (response.isLoading) return <CircularProgress />

    console.log('checkuser', response?.data?._id)
    // if (!response?.data?._id) {
    //     return <Navigate to="/login" />
    // }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default ProtectedLayout
