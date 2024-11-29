import { ImageUpload } from '@components/Posts/PostCreation'
import {
    Avatar,
    Button,
    CircularProgress,
    DialogActions,
    DialogContent,
    TextareaAutosize,
} from '@mui/material'
import { closeDialog } from '@redux/slices/dialogSlice'
import { openSnackbar } from '@redux/slices/snackbarSlice'
import { useCreatePostMutation } from '@services/rootApi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const NewPostCreateContent = ({ userInfo }) => {
    const dispatch = useDispatch()
    const [createPost, { isLoading }] = useCreatePostMutation()
    const [content, setContent] = useState('')
    const [image, setImage] = useState()
    const handlePost = async () => {
        if (!content.trim()) return
        try {
            const formData = new FormData()
            formData.append('content', content)
            formData.append('image', image)

            await createPost(formData).unwrap()
            dispatch(closeDialog())
            dispatch(
                openSnackbar({
                    message: 'Create post successfully',
                })
            )
        } catch (error) {
            console.log(error)
            dispatch(
                openSnackbar({
                    message: error,
                    type: 'error',
                })
            )
        }
    }
    return (
        <>
            <DialogContent className="!pt-4">
                <div className="flex items-center gap-2">
                    <Avatar className="!h-8 !w-8 !bg-primary-100">
                        {userInfo?.fullName?.[0]?.toUpperCase()}
                    </Avatar>
                    <p className="bold">{userInfo?.fullName}</p>
                </div>
                <TextareaAutosize
                    minRows={3}
                    placeholder="What's on your mind?"
                    className="mt-4 w-full p-2"
                    onChange={(event) => {
                        setContent(event.target.value)
                    }}
                />
                <ImageUpload image={image} setImage={setImage} />
            </DialogContent>
            <DialogActions className="!px-6 !pb-4">
                <Button
                    fullWidth
                    variant="contained"
                    onClick={handlePost}
                    disabled={isLoading || !content}
                >
                    POST
                    {isLoading && (
                        <CircularProgress
                            size="16px"
                            className="ml-1"
                            color="neutral"
                        />
                    )}
                </Button>
            </DialogActions>
        </>
    )
}
export default NewPostCreateContent
