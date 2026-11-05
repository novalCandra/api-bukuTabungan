import { IsNumber, IsString, Length, ValidateNested } from "class-validator";
import { Type } from "class-transformer"

class UserDto {
    @IsNumber()
    id: number;
}

export class CreateNotedDto {
    @ValidateNested()
    @Type(() => UserDto)
    user: UserDto;
    @IsString()
    @Length(1, 255, { message: "notes wajib diisi untuk customer" })
    notes: string;
}