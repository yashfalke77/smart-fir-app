export interface User {
  name: string;
  email: string;
  role?: string;
  firs?: string[];
  gender: string | undefined;
  phone: string | undefined;
  address: {
    street: string;
    city: string;
    state: string;
  };
  pincode: string | undefined;
  dob: string;
  isActive?: boolean;
  password: string;
}
