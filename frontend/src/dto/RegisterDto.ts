export interface RegisterDto {
  name: string;
  email: string;
  phone_number: string;
  createdAt: Date;
  password?: string;
}
