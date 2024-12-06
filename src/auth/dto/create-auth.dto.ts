import {IsEmail,IsString,MinLength} from "class-validator"

export class CreateAuthDto {

@IsEmail()
email:string

@MinLength(8)
@IsString()
password:string

@IsString()
name:string

}
