import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { axiosClient } from 'src/config/axiosInstance'
import { ILoginBody, ILoginResponse } from 'src/types/auth.types'

import * as apiKeys from '../../constants/apiKeys.constants'
import useAuthContext from '../../contexts/AuthContext/authContext.hook'

const loginApi = (body: ILoginBody): Promise<ILoginResponse> =>
  axiosClient.post('auth/login', body).then((res) => res.data)

export function useLogin() {
  const navigate = useNavigate()

  const { authDispatch } = useAuthContext()

  return useMutation<ILoginResponse, AxiosError, ILoginBody, unknown>({
    mutationKey: [apiKeys.auth.LOGIN],
    mutationFn: loginApi,
    onSuccess: (data) => {
      // storing the access token and refresh token in the local storage to persist the tokens
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      localStorage.setItem('userId', data.userId)
      localStorage.setItem('username', data.username)

      // we are saving the access token and the refresh token in the context since we will be using this globally
      authDispatch({
        type: 'LOGIN',
        payload: {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          userId: data.userId,
          username: data?.username,
        },
      })

      navigate('/feed')
    },
    onError: (error) => {
      // TODO => show a toast
    },
  })
}
