import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  phone_number: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password?: string;
  @ApiProperty()
  createdAt: Date;
}
