import { FormHelperText } from '@mui/material'
import { Controller } from 'react-hook-form'

const FormField = ({
    control,
    label,
    name,
    Component,
    type,
    placeholder,
    error,
    required,
}) => {
    return (
        <div>
            <p className="mb-1 text-[13px] text-sm text-dark-100">
                {label}
                {required && <span className="text-red-500">*</span>}
            </p>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value, name } }) => {
                    return (
                        <Component
                            onChange={onChange}
                            value={value}
                            name={name}
                            type={type}
                            control={control}
                            placeholder={placeholder}
                            error={error?.message}
                        />
                    )
                }}
            />
            {error && error?.message && (
                <FormHelperText error={true}>{error?.message}</FormHelperText>
            )}
        </div>
    )
}

export default FormField
