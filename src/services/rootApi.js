import { login, logout } from '@redux/slices/authSlice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.accessToken
        if (token) headers.set('Authorization', `Bearer ${token}`)
    },
})
const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status === 401) {
        const refreshToken = api.getState().auth.refreshToken
        if (refreshToken) {
            const refreshResult = await baseQuery(
                {
                    url: 'refresh-token',
                    body: { refreshToken },
                    method: 'POST',
                },
                api,
                extraOptions
            )

            const newAccessToken = refreshResult?.data?.accessToken

            if (newAccessToken) {
                api.dispatch(
                    login({ accessToken: newAccessToken, refreshToken })
                )
                result = await baseQuery(args, api, extraOptions)
            } else {
                api.dispatch(logout())
                window.location.herf = '/login'
            }
        }
    }
    return result
}
export const rootApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => {
        return {
            register: builder.mutation({
                query: ({ fullName, email, password }) => {
                    return {
                        url: '/signup',
                        body: { fullName, email, password },
                        method: 'POST',
                    }
                },
            }),
            login: builder.mutation({
                query: ({ email, password }) => {
                    return {
                        url: 'login',
                        body: { email, password },
                        method: 'POST',
                    }
                },
            }),
            verifyOTP: builder.mutation({
                query: ({ email, otp }) => {
                    return {
                        url: 'verify-otp',
                        body: { email, otp },
                        method: 'POST',
                    }
                },
            }),
            refreshToken: builder.mutation({
                query: ({ refreshToken }) => {
                    return {
                        url: '/refresh-token',
                        method: 'POST',
                        body: { refreshToken },
                    }
                },
            }),
            getAuthUser: builder.query({
                query: () => '/auth-user',
            }),
            createPost: builder.mutation({
                query: (formData) => {
                    return {
                        url: '/posts',
                        method: 'POST',
                        body: formData,
                    }
                },
            }),
            getPost: builder.query({
                query: () => '/posts',
            }),
        }
    },
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useVerifyOTPMutation,
    useGetAuthUserQuery,
    useCreatePostMutation,
    useGetPostQuery,
} = rootApi
