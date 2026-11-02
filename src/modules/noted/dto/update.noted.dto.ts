import { CreateNotedDto } from "./create.noted.dto.js";

export class UpdateDtoNotes implements CreateNotedDto {
    userId: number;
    notes: string;
}