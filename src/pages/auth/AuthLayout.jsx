import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '@components/Base/Loading'
// Supports weights 100-900
import '@fontsource-variable/public-sans'
const retageTopStyle =
    "after:bg-primary-500 after:content-[''] after:w-[200px] after:h-[200px] after:absolute after:-z-20 after:-top-8 after:-left-8 after:rounded-md"
const retageBottomStyle =
    "before:bg-primary-500 before:content-[''] before:w-[135px] before:h-[135px] before:absolute before:-z-10 before:-bottom-6 before:-right-10 before:rounded-md"
const AuthLayout = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-primary-500 text-dark-100">
            <div
                className={`h-fit w-[450px] bg-white px-8 py-10 ${retageTopStyle} ${retageBottomStyle} relative rounded-md shadow-lg`}
            >
                <div className="absolute -top-16 left-12 -z-10 h-[150px] w-[150px] rounded-[20px] border border-primary-600" />
                <div className="absolute -bottom-12 -right-16 -z-10 h-[180px] w-[180px] rounded-[20px] border-2 border-dashed border-primary-600" />
                <img src="/weconnect-logo.png" alt="" className="mx-auto" />
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}

export default AuthLayout
