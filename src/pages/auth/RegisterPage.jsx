import FormField from '@components/Form/FormField'
import TextInput from '@components/Form/FromInput/TextInput'
import { Alert, Button } from '@mui/material'
import { openSnackbar } from '@redux/slices/snackbarSlice'
import { useRegisterMutation } from '@services/rootApi'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    const dispatch = useDispatch()
    const { handleSubmit, control } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
    })

    const [register, { data, isLoading, isError, isSuccess, error }] =
        useRegisterMutation()

    const handleSubmitRegister = (formData) => {
        console.log(formData)
        register(formData)
        console.log('error', error)
    }

    if (isSuccess) {
        dispatch(
            openSnackbar({
                message: data?.message,
                type: 'success',
            })
        )
        return
    }
    if (isError) {
        dispatch(
            openSnackbar({
                message: error?.data?.message,
                type: 'error',
            })
        )
    }

    return (
        <div>
            <div className="my-6">
                <h3 className="text-[22px]">Adventure starts here </h3>
                <p>Make your app management easy and fun!</p>
            </div>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(handleSubmitRegister)}
            >
                <FormField
                    name="fullName"
                    label="Full Name"
                    control={control}
                    Component={TextInput}
                    placeholder="john.doe"
                />
                <FormField
                    name="email"
                    label="Email"
                    control={control}
                    Component={TextInput}
                />
                <FormField
                    name="password"
                    label="Password"
                    control={control}
                    type="password"
                    Component={TextInput}
                />
                <Button
                    type="submit"
                    variant="contained"
                    className="!capitalize"
                >
                    Sign up
                </Button>
                {isError && error?.data?.message && (
                    <Alert severity="error">{error?.data?.message}</Alert>
                )}
            </form>
            <p className="mt-4">
                Already have an account{' '}
                <Link className="text-primary-100">Sign in instead</Link>
            </p>
        </div>
    )
}

export default RegisterPage
