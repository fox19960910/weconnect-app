import { useMediaQuery, useTheme } from '@mui/material'

const useReponsive = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    return {
        isMobile,
    }
}

export default useReponsive
