import FormField from '@components/Form/FormField'
import TextInput from '@components/Form/FromInput/TextInput'
import { Alert, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useEffect } from 'react'
import { openSnackbar } from '@redux/slices/snackbarSlice'
import { useLoginMutation } from '@services/rootApi'
const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formSchema = yup.object().shape({
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
        getValues,
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(formSchema),
    })

    const [login, { data, isError, isSuccess, error, isLoading }] =
        useLoginMutation()

    const handleSubmitLogin = (formData) => {
        console.log(formData)
        login(formData)
    }

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(
                openSnackbar({
                    message: data?.message,
                    type: 'success',
                })
            )
            navigate('/otp', {
                state: {
                    email: getValues('email'),
                },
            })
        }
    }, [isSuccess, data, data?.message, dispatch, navigate, getValues])
    return (
        <div>
            <div className="my-6">
                <h3 className="text-[22px]">Welcome to WeConnect! </h3>
                <p>Please sign in to your account and start the adventure</p>
            </div>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(handleSubmitLogin)}
            >
                <FormField
                    name="email"
                    label="Email or Username"
                    control={control}
                    Component={TextInput}
                    placeholder="john.doe@gmail.com"
                    error={errors['email']}
                />
                <FormField
                    name="password"
                    label="Password"
                    control={control}
                    type="password"
                    Component={TextInput}
                    error={errors['password']}
                />
                <Button
                    type="submit"
                    variant="contained"
                    className="!capitalize"
                    disabled={isLoading}
                >
                    Sign in
                </Button>
                {isError && error?.data?.message && (
                    <Alert severity="error">{error?.data?.message}</Alert>
                )}
            </form>
        </div>
    )
}

export default LoginPage
