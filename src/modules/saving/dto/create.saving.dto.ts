import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString, ValidateNested } from "class-validator";

class UserType {
    @IsNumber()
    id: number;
}
export class CreateOrPutSaving {
    @ValidateNested()
    @Type(() => UserType)
    user: UserType;
    @Type(() => Date)
    @IsDate()
    Date: Date;
    @IsNumber()
    widrawalAmount: number;
    @IsNumber()
    balance: number
}