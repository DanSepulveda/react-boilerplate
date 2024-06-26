import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginLS, userState } from '@redux/user'
import { AppDispatch } from '@app/store'
import { LS_TOKEN_NAME } from '@app/constants'

export const useLoginLS = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch<AppDispatch>()
  const { token } = useSelector(userState)

  const loginByToken = async () => {
    const lsToken = localStorage.getItem(LS_TOKEN_NAME)

    if (lsToken) {
      await dispatch(loginLS(lsToken))
    }
    setLoading(false)
  }

  useEffect(() => {
    loginByToken()
  }, [])

  return { token, loading }
}
