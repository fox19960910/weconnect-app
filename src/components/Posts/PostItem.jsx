import { Avatar } from '@mui/material'

const PostItem = () => {
    return (
        <div>
            <div className="flex items-center">
                <Avatar className="!h-8 !w-8 !bg-primary-100">name</Avatar>
                <div className="ml-3">
                    <p className="font-bold">Daniel Mark</p>
                    <p className="text-[13px] text-dark-100">9 hours ago</p>
                </div>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi nulla dolor, ornare at commodo non, feugiat non nisi.
                    Phasellus faucibus mollis pharetra. Proin blandit ac massa
                    sed rhoncus
                </p>
                <img src="/bg-post.jpg" alt="" />
            </div>
            <div>
                <div>
                    <div>
                        <img src="/thumb-up.svg" alt="" />
                        <p>30</p>
                    </div>
                    <div>
                        <p>9 comments</p>
                    </div>
                    <div>
                        <p> 5 shares</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src="/thumb-up.svg" alt="" />
                    <p>Like</p>
                </div>
                <div>
                    <img src="/thumb-up.svg" alt="" />
                    <p>Comment</p>
                </div>
                <div>
                    <img src="/thumb-up.svg" alt="" />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default PostItem
