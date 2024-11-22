import FormField from '@components/Form/FormField'
import TextInput from '@components/Form/FromInput/TextInput'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    const { control } = useForm()
    return (
        <div>
            <div className="my-6">
                <h3 className="text-[22px]">Adventure starts here </h3>
                <p>Make your app management easy and fun!</p>
            </div>
            <form className="flex flex-col gap-4">
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
                <Button variant="contained" className="!capitalize">
                    Sign up
                </Button>
            </form>
            <p className="mt-4">
                Already have an account{' '}
                <Link className="text-primary-100">Sign in instead</Link>
            </p>
        </div>
    )
}

export default RegisterPage
