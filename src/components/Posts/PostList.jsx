import { useGetPostQuery } from '@services/rootApi'
import PostItem from './PostItem'

const PostList = () => {
    const { data, isLoading } = useGetPostQuery()
    console.log(data)

    return (
        <div className="flex flex-col gap-4">
            {data &&
                data.length > 0 &&
                data.map((item) => 
                <PostItem 
                    key={item._id} 
                    fullName={item?.author?.fullName} 
                    content={item.content} 
                    createAt={item?.createAt} 
                    image={item?.image} 
                    likes={item?.likes || []} 
                    comments = {item?.comments || []} />
                    )
            }
        </div>
    )
}

export default PostList
