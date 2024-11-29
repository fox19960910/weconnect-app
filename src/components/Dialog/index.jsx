import { CONTENT_TYPE } from '@libs/constants'
import CloseIcon from '@mui/icons-material/Close'
import { DialogTitle, IconButton, Dialog as MUIDialog } from '@mui/material'
import { closeDialog } from '@redux/slices/dialogSlice'
import { useDispatch, useSelector } from 'react-redux'
import NewPostCreateContent from './configs/NewPostDialog'

const DyamicContent = ({ contentType, additionalData }) => {
    switch (contentType) {
        case CONTENT_TYPE.NEW_POST_DIALOG:
            return <NewPostCreateContent userInfo={additionalData} />
        default:
            return <p>{typeof additionalData === 'string' && additionalData}</p>
    }
}
const Dialog = () => {
    const dialog = useSelector((state) => state.dialog)
    const dispatch = useDispatch()
    return (
        <MUIDialog
            open={dialog.open}
            maxWidth={dialog.maxWidth}
            fullWidth={dialog.fullWidth}
            onClose={() => dispatch(closeDialog())}
        >
            <DialogTitle className="flex justify-between border-b">
                {dialog.title}{' '}
                <IconButton
                    onClick={() => dispatch(closeDialog())}
                    className="!p-0"
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DyamicContent
                contentType={dialog.contentType}
                additionalData={dialog.additionalData}
            ></DyamicContent>
        </MUIDialog>
    )
}

export default Dialog
