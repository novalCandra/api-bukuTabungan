import { IsNumber, IsString } from "class-validator";

export class GetDtoNoted {
    @IsNumber()
    id: number;
    @IsNumber()
    userId: number;
    @IsString()
    notes: string;
}