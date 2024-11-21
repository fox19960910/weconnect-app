import { TextField } from '@mui/material'

const TextInput = ({ onChange, name, value, type = 'text' }) => {
    return (
        <TextField onChange={onChange} name={name} value={value} type={type} />
    )
}

export default TextInput
