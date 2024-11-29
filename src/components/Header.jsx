import useLogout from '@hooks/useLogout'
import useReponsive from '@hooks/useReponsive'
import { useUserInfo } from '@hooks/useUserInfo'
import { Menu as MenuIcon, Notifications } from '@mui/icons-material'
import {
    AppBar,
    Avatar,
    Badge,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Toolbar,
} from '@mui/material'
import { toggleDrawer } from '@redux/slices/settingSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
    const [anchorEl, setAnchorEl] = useState()
    const userInfo = useUserInfo()
    const { logoutFunc } = useLogout()
    const { isMobile } = useReponsive()
    const dispatch = useDispatch()

    const renderMenu = () => (
        <Menu
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem onClick={() => logoutFunc()}>Logout</MenuItem>
        </Menu>
    )

    const handleUserProfileClick = (event) => {
        setAnchorEl(event.target)
    }
    const renderLeftMenu = () => {
        return !isMobile ? (
            <>
                <img src="/weconnect-logo.png" alt="" className="h-8 w-8" />
                <div className="ml-2 flex items-center">
                    <img
                        src="/assets/icons/search.svg"
                        alt=""
                        className="h-[22px] w-[22px]"
                    />
                    <TextField
                        variant="standard"
                        name="search"
                        placeholder="Search (Ctrl+/)"
                        slotProps={{
                            input: {
                                className: 'h-10 px-3 py-2',
                            },
                            htmlInput: { className: '!p-0' },
                        }}
                        sx={{
                            '.MuiInputBase-root::before': { display: 'none' },
                        }}
                    />
                </div>
            </>
        ) : (
            <IconButton onClick={() => dispatch(toggleDrawer())}>
                <MenuIcon />
            </IconButton>
        )
    }
    return (
        <div>
            <AppBar position="static" color="white" className="">
                <Toolbar className="justify-between">
                    <div className="flex items-center gap-4">
                        {renderLeftMenu()}
                    </div>
                    <div>
                        <IconButton size="medium">
                            <Badge badgeContent={4} color="error">
                                <Notifications />
                            </Badge>
                        </IconButton>

                        <IconButton
                            size="medium"
                            onClick={handleUserProfileClick}
                        >
                            {/* <AccountCircle /> */}
                            <Avatar className="!bg-primary-100">
                                {userInfo?.fullName?.[0]?.toUpperCase()}
                            </Avatar>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu()}
        </div>
    )
}

export default Header
