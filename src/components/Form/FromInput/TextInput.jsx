import { TextField } from '@mui/material'

const TextInput = ({ onChange, name, value, type = 'text', placeholder }) => {
    return (
        <TextField
            fullWidth
            slotProps={{
                input: {
                    className:
                        'h-[38px] px-3 py-2 border-dark-300 w-full placeholder:text-[15px]',
                },
                htmlInput: { className: '!p-0' },
            }}
            onChange={onChange}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default TextInput
