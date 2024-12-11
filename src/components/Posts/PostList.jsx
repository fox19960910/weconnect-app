import { useGetPostQuery } from '@services/rootApi'
import PostItem from './PostItem'
import Loading from '@components/Base/Loading'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const PostList = () => {
    const [offset, setOffset] = useState(0)
    const [posts, setPosts] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const postListRef = useRef()
    const limit = 5
    const { data, isFetching, isSuccess } = useGetPostQuery({
        offset,
        limit,
    })

    const onScroll = () => {
        if (!hasMore) return
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        if (scrollTop + clientHeight + 50 >= scrollHeight) {
            setOffset((prev) => prev + limit)
        }
    }
    useEffect(() => {
        window.document.addEventListener('scroll', onScroll)
        return () => window.document.removeEventListener('scroll', onScroll)
    }, [isFetching, hasMore])
    const previousData = useRef()
    useEffect(() => {
        if (isSuccess && data && previousData.current !== data) {
            console.log('data', !data.length)

            if (!data.length) {
                setHasMore(false)
                return
            }
            previousData.current = data
            setPosts((prev) => [...prev, ...data])
        }
    }, [isSuccess, data])
    // if (isFetching) {
    //     return (
    //         <div className="flex h-28 items-center justify-center">
    //             <Loading />
    //         </div>
    //     )
    // }

    return (
        <div className="flex flex-col gap-4" ref={postListRef}>
            {posts &&
                posts.length > 0 &&
                posts.map((item) => (
                    <PostItem
                        key={item._id}
                        fullName={item?.author?.fullName}
                        content={item.content}
                        createAt={item?.createAt}
                        image={item?.image}
                        likes={item?.likes || []}
                        comments={item?.comments || []}
                    />
                ))}
        </div>
    )
}

export default PostList
