import { useUserInfo } from '@hooks/useUserInfo'
import { Avatar, TextareaAutosize, TextField } from '@mui/material'
import { openDialog } from '@redux/slices/dialogSlice'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useDispatch } from 'react-redux'

const ImageUpload = () => {
    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
        console.log('acceptedFiles', acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        maxFiles: 1,
        accept: '.jpg.jpeg.png',
    })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag & drop some files here, or click to select files</p>
            )}
        </div>
    )
}

const PostCreation = () => {
    const userInfo = useUserInfo()
    const dispatch = useDispatch()
    const handleFocusPostCreation = () => {
        dispatch(
            openDialog({
                title: 'Create your post',
                content: (
                    <>
                        <div className="flex items-center gap-2">
                            <Avatar className="!h-8 !w-8">
                                {userInfo?.fullName?.[0]?.toUpperCase()}
                            </Avatar>
                            <p className="bold">Your Name</p>
                        </div>
                        <TextareaAutosize
                            minRows={3}
                            placeholder="What's on your mind?"
                            className="mt-4 w-full p-2"
                        />
                        <ImageUpload />
                    </>
                ),
            })
        )
    }
    return (
        <div className="paper flex gap-2 bg-white px-4 py-3 sm:px-6 sm:py-5">
            <Avatar>{userInfo?.fullName?.[0]?.toUpperCase()}</Avatar>
            <TextField
                className="flex-1"
                size="small"
                placeholder="What's on your mind?"
                slotProps={{
                    htmlInput: {
                        className: ' placeholder:text-[14px]',
                    },
                }}
                onClick={handleFocusPostCreation}
            />
        </div>
    )
}

export default PostCreation
