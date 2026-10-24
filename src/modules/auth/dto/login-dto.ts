import { RegisterDTO } from "./register-dto.js";

export class LoginDto implements Partial<RegisterDTO> {
    email: string;
    password: string;
}