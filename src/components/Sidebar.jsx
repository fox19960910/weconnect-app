import useReponsive from '@hooks/useReponsive'
import { Drawer, IconButton, List, ListSubheader } from '@mui/material'
import { toggleDrawer } from '@redux/slices/settingSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
const SidebarContent = () => {
    return (
        <div className="w-[260px]">
            <List className="paper !mb-4 bg-white !px-4 !py-3">
                <Link to="/" className="flex items-center gap-2 px-4 py-2">
                    <img src="/assets/icons/news.svg" alt="" />
                    New Feeds
                </Link>
                <Link
                    to="/messages"
                    className="flex items-center gap-2 px-4 py-2"
                >
                    {' '}
                    <img src="/assets/icons/brand-messenger.svg" alt="" />{' '}
                    Messenger
                </Link>
                <Link
                    to="/friends"
                    className="flex items-center gap-2 px-4 py-2"
                >
                    <img src="/assets/icons/friends.svg" alt="" />
                    Friends
                </Link>
                <Link
                    to="/groups"
                    className="flex items-center gap-2 px-4 py-2"
                >
                    {' '}
                    <img src="/assets/icons/3d-cube-sphere.svg" alt="" />
                    Groups
                </Link>
            </List>

            <List className="paper bg-white !px-4 !py-3">
                <ListSubheader className="">Settings</ListSubheader>
                <Link
                    to="/settings/account"
                    className="flex items-center gap-2 px-4 py-2"
                >
                    {' '}
                    <img src="/assets/icons/settings.svg" alt="" />
                    Account
                </Link>
                <Link
                    to="/setting/languages"
                    className="flex items-center gap-2 px-4 py-2"
                >
                    {' '}
                    <img src="/assets/icons/language.svg" alt="" />
                    Languages
                </Link>
            </List>
        </div>
    )
}

const Sidebar = () => {
    const dispatch = useDispatch()
    const { isMobile } = useReponsive()
    const isShowDrawer = useSelector((state) => state.settings.isShowDrawer)
    console.log('isShowDrawer', isShowDrawer)

    if (isMobile) {
        return (
            <Drawer
                open={isShowDrawer}
                onClose={() => dispatch(toggleDrawer())}
                classes={{
                    paper: '!bg-dark-200 px-4',
                }}
            >
                <div className="flex justify-between !py-3">
                    <img src="/weconnect-logo.png" alt="" className="h-8 w-8" />
                    <IconButton
                        onClick={() => dispatch(toggleDrawer())}
                        className="!p-0"
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                <SidebarContent />
            </Drawer>
        )
    }
    return <SidebarContent />
}
export default Sidebar
