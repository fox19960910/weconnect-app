import FormField from '@components/Form/FormField'
import TextInput from '@components/Form/FromInput/TextInput'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
    const { control } = useForm()
    return (
        <div>
            <div className="my-6">
                <h3 className="text-[22px]">Welcome to WeConnect! </h3>
                <p>Please sign in to your account and start the adventure</p>
            </div>
            <form className="flex flex-col gap-4">
                <FormField
                    name="fullName"
                    label="Email or Username"
                    control={control}
                    Component={TextInput}
                    placeholder="john.doe@gmail.com"
                />
                <FormField
                    name="password"
                    label="Password"
                    control={control}
                    type="password"
                    Component={TextInput}
                />
                <Button variant="contained" className="!capitalize">
                    Sign in
                </Button>
            </form>
        </div>
    )
}

export default LoginPage
