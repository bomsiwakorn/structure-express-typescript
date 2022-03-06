import { IsString } from 'class-validator'
export class CreateTodoRequest {
  @IsString()
  title: string

  @IsString()
  description: string
}
