import { DateType } from 'react-tailwindcss-datepicker/dist/types';

export interface UserModel {
  _id?: string
  name: string
  email: string
  role?: string
  firs?: string[]
  gender: string | undefined
  phone: string | undefined
  address: {
    street: string
    city: string
    state: string
  }
  pincode: string | undefined
  dob: string
  isActive?: boolean
  password: string
}

export interface UserInput {
  name: string | undefined
  email: string | undefined
  gender: string | undefined
  phone: string | undefined
  address: {
    street: string
    city: string
    state: string
  }
  pincode: string | undefined
  dob: {
    startDate: DateType | null | undefined
    endDate: DateType | null | undefined
  }
  password: string | undefined
  role: string | undefined
}

export interface CurrentUser {
  '_id': string;
  role: string;
  name: string;
}
