import { Avatar } from '@mui/material'

const PostItem = ({
    fullName = 'Name',
    createAt = '9 hours ago',
    content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi nulla dolor, ornare at commodo non, feugiat nonnisi. Phasellus faucibus mollis pharetra. Proin blanditac massa sed rhoncus',
    image = '/assets/icons/thumb-up.svg',
    likes = [],
    comments = [],
}) => {
    return (
        <div className="paper bg-white">
            <div className="px-6 py-4">
                <div className="mb-3 flex items-center">
                    <Avatar className="!h-8 !w-8 !bg-primary-100">
                        {' '}
                        {fullName?.[0]?.toUpperCase()}
                    </Avatar>
                    <div className="ml-3">
                        <p className="font-bold">{fullName}</p>
                        <p className="text-[13px] text-dark-100">{createAt}</p>
                    </div>
                </div>
                <div className="mb-3">
                    <p className="mb-3">{content}</p>
                    <img src={image} alt="" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                            <img src="/assets/icons/thumb-up.svg" alt="" />
                            <p>{likes.length}</p>
                        </div>
                        <div>
                            <span className="pr-4">
                                {comments.length} comments
                            </span>
                            <span> 5 shares</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-dark-600 flex items-center justify-between border-t px-6 py-3">
                <div className="flex cursor-pointer items-center gap-2">
                    <img src="/assets/icons/thumbup-icon.svg" alt="" />
                    <p>Like</p>
                </div>
                <div className="flex cursor-pointer items-center gap-2">
                    <img src="/assets/icons/comment-icon.svg" alt="" />
                    <p>Comment</p>
                </div>
                <div className="flex cursor-pointer items-center gap-2">
                    <img src="/assets/icons/share-icon.svg" alt="" />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default PostItem
