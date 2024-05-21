import axios from 'axios'
import { BACKEND_URL } from 'src/lib/env'

export const getUserDetails = () => axios.get(`${BACKEND_URL}/api/user/details`)
