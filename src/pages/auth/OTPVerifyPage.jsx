import FormField from '@components/Form/FormField'
import OTPInput from '@components/Form/FromInput/OTPInput'
import { Button, Link } from '@mui/material'
import { useForm } from 'react-hook-form'

const OTPVerifyPage = () => {
    const { control } = useForm()
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
            <form className="flex flex-col gap-4">
                <FormField
                    name="fullName"
                    control={control}
                    Component={OTPInput}
                    placeholder="john.doe@gmail.com"
                />
                <Button variant="contained" className="!capitalize">
                    Verify my account
                </Button>
                <p className="mt-2 text-center">
                    Didn&apos;t get the code?{' '}
                    <Link className="text-primary-100">Resend</Link>
                </p>
            </form>
        </div>
    )
}

export default OTPVerifyPage
