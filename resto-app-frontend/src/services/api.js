import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5555',
})

export const login = async (data) => {
  const response = await api.post(`/auth/login`, data)

  if (response.status === 201) {
    await localStorage.setItem('resto-app-token', response.data.access_token)
    await localStorage.setItem('resto-app-user', JSON.stringify(response.data.user))
    axios.defaults.headers.common['Authorization'] = `bearer ${data.access_token}`
  }
  return response.data
}
