import FormField from '@components/Form/FormField'
import OTPInput from '@components/Form/FromInput/OTPInput'
import { Alert, Button, Link } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { openSnackbar } from '@redux/slices/snackbarSlice'
import { useEffect } from 'react'
import { useVerifyOTPMutation } from '@services/rootApi'
import { login } from '@redux/slices/authSlice'

const OTPVerifyPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const formSchema = yup.object().shape({
        otp: yup
            .string()
            .required()
            .matches(/^\d{6}$/, 'OTP is not valid')
            .required(),
    })
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            otp: '',
        },
        resolver: yupResolver(formSchema),
    })

    const [verifyOTP, { data, isLoading, isError, isSuccess, error }] =
        useVerifyOTPMutation()

    const handleSubmitLogin = (formData) => {
        console.log(location?.state)
        verifyOTP({ email: location?.state?.email, otp: formData?.otp })
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(
                openSnackbar({
                    message: data?.message,
                    type: 'success',
                })
            )
            dispatch(login(data))
            navigate('/')
        }
    }, [isSuccess, data?.message, dispatch, navigate])
    return (
        <div>
            <div className="my-6">
                <h3 className="text-[22px]">Two-Step Verification </h3>
                <p>
                    We sent a verification code to your mobile. Enter the code
                    from the mobile in the field below.
                </p>
                <p className="mt-2">******9763</p>
            </div>
            <h3 className="font-bold">Type your 6 digit security code</h3>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(handleSubmitLogin)}
            >
                <FormField
                    name="otp"
                    control={control}
                    Component={OTPInput}
                    placeholder="john.doe@gmail.com"
                    error={errors['otp']}
                />
                <Button
                    type="submit"
                    variant="contained"
                    className="!capitalize"
                    isLoading={isLoading}
                >
                    Verify my account
                </Button>
                {isError && error?.data?.message && (
                    <Alert severity="error">{error?.data?.message}</Alert>
                )}
                <p className="mt-2 text-center">
                    Didn&apos;t get the code?{' '}
                    <Link className="text-primary-100">Resend</Link>
                </p>
            </form>
        </div>
    )
}

export default OTPVerifyPage
