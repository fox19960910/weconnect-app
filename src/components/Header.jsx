import { useUserInfo } from '@hooks/useUserInfo'
import { Notifications, Search } from '@mui/icons-material'
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
import { useState } from 'react'

const Header = () => {
    const [anchorEl, setAnchorEl] = useState()
    const userInfo = useUserInfo()
    console.log('userInfo', userInfo)

    const renderMenu = () => (
        <Menu
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    )

    const handleUserProfileClick = (event) => {
        setAnchorEl(event.target)
    }
    return (
        <div>
            <AppBar position="static" color="white" className="">
                <Toolbar className="justify-between">
                    <div className="flex items-center gap-4">
                        <img
                            src="/weconnect-logo.png"
                            alt=""
                            className="h-8 w-8"
                        />
                        <div className="flex items-center">
                            <Search baseClassName="text-dark-200" />
                            <TextField
                                variant="standard"
                                name="search"
                                placeholder="Search (Ctrl+/)"
                                slotProps={{
                                    input: { className: 'h-10 px-3 py-2' },
                                    htmlInput: { className: '!p-0' },
                                }}
                            />
                        </div>
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
                            <Avatar>
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
