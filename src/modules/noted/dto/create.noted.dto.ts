import { IsNumber, IsString, Length } from "class-validator";

export class CreateNotedDto {
    @IsNumber()
    userId: number;
    @IsString()
    @Length(1, 255, { message: "notes wajib diisi untuk customer" })
    notes: string;
}