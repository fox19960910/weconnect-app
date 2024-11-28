import FriendRequest from '@components/FriendRequest'
import PostCreation from '@components/Posts/PostCreation'
import PostList from '@components/Posts/PostList'
import Sidebar from '@components/Sidebar'

function Home() {
    return (
        <div className="flex gap-4 bg-dark-200 p-4 sm:p-6">
            <Sidebar></Sidebar>
            <div className="flex-1">
                <PostCreation />
                <PostList />
            </div>
            <div className="paper hidden w-[260px] bg-white sm:block">
                <FriendRequest />
            </div>
        </div>
    )
}

export default Home
