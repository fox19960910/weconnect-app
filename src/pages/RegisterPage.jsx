import FormField from '@components/Form/FormField'
import TextInput from '@components/Form/FromInput/TextInput'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    const { control } = useForm()
    return (
        <div className="bg-dark-200 flex h-screen items-center justify-center">
            <div className="h-fit w-[450px] bg-white px-8 py-10">
                <img src="/weconnect-logo.png" alt="" className="mx-auto" />
                <form className="flex flex-col gap-4">
                    <FormField
                        name="fullName"
                        label="Full Name"
                        control={control}
                        Component={TextInput}
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
                    <Button>Sign up</Button>
                </form>
                <p>
                    Already have an account <Link>Sign in instead</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage
