import { IsDate, IsNumber, IsString, ValidateNested } from "class-validator";
export class SavingGetDTO {
    @IsNumber()
    userId: number;
    @IsDate()
    Date: Date;
    @IsNumber()
    widrawalAmount: number;
    @IsNumber()
    balance: number
}