import { useUserInfo } from '@hooks/useUserInfo'
import { CONTENT_TYPE } from '@libs/constants'
import { Avatar, IconButton, TextField } from '@mui/material'
import { openDialog } from '@redux/slices/dialogSlice'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useDispatch } from 'react-redux'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import CloseIcon from '@mui/icons-material/Close'

export const ImageUpload = ({ image, setImage }) => {
    // const [image, setImage] = useState()
    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
        console.log('acceptedFiles', acceptedFiles)
        setImage(acceptedFiles?.[0])
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        maxFiles: 1,
        accept: '.jpg.jpeg.png',
    })

    return (
        <div
            {...getRootProps({
                className: `h-16 border border-dashed flex items-center justify-center flex-col relative cursor-pointer bg-primary-500 ${image?.name ? 'border-primary-100' : ''}`,
            })}
        >
            <input {...getInputProps()} />
            {image?.name ? (
                <>
                    <IconButton
                        onClick={(event) => {
                            event.stopPropagation()
                            setImage(null)
                        }}
                        className="!absolute right-2 top-2 !p-0"
                    >
                        <CloseIcon />
                    </IconButton>
                    <p>{image.name}</p>
                </>
            ) : (
                <>
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <>
                            <div>
                                <AddPhotoAlternateIcon className="text-primary-100" />
                            </div>

                            <p>
                                Drag & drop some files here, or click to select
                                files
                            </p>
                        </>
                    )}
                </>
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
                contentType: CONTENT_TYPE.NEW_POST_DIALOG,
                additionalData: userInfo,
            })
        )
    }
    return (
        <div className="paper flex gap-2 bg-white px-4 py-3 sm:px-6 sm:py-5">
            <Avatar className="!bg-primary-100">
                {userInfo?.fullName?.[0]?.toUpperCase()}
            </Avatar>
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
