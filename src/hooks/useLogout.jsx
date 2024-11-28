import { logout } from '@redux/slices/authSlice'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useLogout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutFunc = () => {
        dispatch(logout())
        navigate('/login', { replace: true })
    }
    return {
        logoutFunc,
    }
}

export default useLogout
