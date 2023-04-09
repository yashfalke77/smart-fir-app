import jwtDecode from 'jwt-decode';
import { CurrentUser } from '../models/user.model';

const tokenKey = 'x-auth-token';

export default {
  setJwt: (jwt: string) => {
    localStorage.setItem(tokenKey, jwt);
  },

  getJwt: () => localStorage.getItem(tokenKey),

  logout: () => {
    localStorage.removeItem(tokenKey);
  },

  getCurrentUser: (): CurrentUser | undefined => {
    try {
      const token = localStorage.getItem(tokenKey) as string;
      return jwtDecode(token);
    } catch (error) {
      return undefined;
    }
  },
};
