import jwtDecode from 'jwt-decode'

const tokenKey = 'x-auth-token'

export default {
  setJwt: (jwt: string) => {
    localStorage.setItem(tokenKey, jwt)
  },

  getJwt: () => {
    return localStorage.getItem(tokenKey)
  },

  logout: () => {
    localStorage.removeItem(tokenKey)
  },

  getCurrentUser: (): object | undefined => {
    try {
      const token = localStorage.getItem(tokenKey) as string
      return jwtDecode(token)
    } catch (error) {
      return undefined
    }
  }
}
