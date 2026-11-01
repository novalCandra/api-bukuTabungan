import { IsDate, IsNumber, IsString } from "class-validator";

export class DtoDashboarUsers {
    @IsString()
    name: number;
    @IsDate()
    Date: Date;
    @IsNumber()
    widrawalAmount: number;
    @IsNumber()
    balance: number;
}