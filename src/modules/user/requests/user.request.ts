import { IsString, Length } from 'class-validator'
export class CreateUserRequest {
  @Length(1, 45)
  email: string

  @IsString()
  @Length(6, 45)
  password: string
}
