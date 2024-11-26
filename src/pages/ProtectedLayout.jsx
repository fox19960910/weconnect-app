import { CircularProgress } from '@mui/material'
import { useGetAuthUserQuery } from '@services/rootApi'
import { Navigate, Outlet } from 'react-router-dom'
// Supports weights 100-900
const ProtectedLayout = () => {
    const { data, isLoading } = useGetAuthUserQuery()
    console.log(data)
    if (isLoading) return <CircularProgress />
    if (!data?._id) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default ProtectedLayout
