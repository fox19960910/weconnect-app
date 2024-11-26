import FormField from '@components/Form/FormField'
import TextInput from '@components/Form/FromInput/TextInput'
import { Alert, Button } from '@mui/material'
import { openSnackbar } from '@redux/slices/snackbarSlice'
import { useRegisterMutation } from '@services/rootApi'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const RegisterPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formSchema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup
            .string()
            .required()
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                'Email is not valid'
            )
            .required(),
        password: yup.string().required(),
    })
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(formSchema),
    })

    const [register, { data, isLoading, isError, isSuccess, error }] =
        useRegisterMutation()

    const handleSubmitRegister = (formData) => {
        console.log(formData)
        register(formData)
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(
                openSnackbar({
                    message: data?.message,
                    type: 'success',
                })
            )
            navigate('/login')
        }
    }, [isSuccess, data?.message, dispatch, navigate])

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
                    error={errors['fullName']}
                    required
                />
                <FormField
                    name="email"
                    label="Email"
                    control={control}
                    Component={TextInput}
                    error={errors['email']}
                    required
                />
                <FormField
                    name="password"
                    label="Password"
                    control={control}
                    type="password"
                    Component={TextInput}
                    error={errors['password']}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    className="!capitalize"
                    isLoading={isLoading}
                >
                    Sign up
                </Button>
                {isError && error?.data?.message && (
                    <Alert severity="error">{error?.data?.message}</Alert>
                )}
            </form>
            <p className="mt-4">
                Already have an account{' '}
                <Link to="/login" className="text-primary-100">
                    Sign in instead
                </Link>
            </p>
        </div>
    )
}

export default RegisterPage
