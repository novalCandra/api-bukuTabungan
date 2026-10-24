
import { Role } from "../../../generated/prisma/enums.js";
import { IsEmail, IsString } from "class-validator"
export class RegisterDTO {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsString()
    phone : string
    role: Role;
}