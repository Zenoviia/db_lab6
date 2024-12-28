export default interface IUser {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    is_admin: number;
    description: string | null;
    age: number | null;
    gender: string | null;
    company: string | null;
  }