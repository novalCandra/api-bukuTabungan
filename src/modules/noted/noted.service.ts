import { Injectable } from "@nestjs/common";
import { NotedRepository } from "./noted.repository.js";
import { CreateNotedDto } from "./dto/create.noted.dto.js";
import { UpdateDtoNotes } from "./dto/update.noted.dto.js";

@Injectable()
export class NotedService {
    constructor(private readonly notedRepository: NotedRepository) { };

    async getAllNotesCustomersService(userId: number) {
        return await this.notedRepository.getAllNotesCustomers(userId)
    }

    async getAllNotesPenjualService() {
        return await this.notedRepository.getAllNotesPenjual()
    }

    async PostNotedPenjualService(createDto: CreateNotedDto) {
        return await this.notedRepository.PostNotedPenjual({ user: createDto.user, notes: createDto.notes })
    }

    async updatePenjualService(id: number, updateDto: CreateNotedDto) {
        return await this.notedRepository.updateNotedPenjual(id, { user: updateDto.user, notes: updateDto.notes })
    }

    async deletePenjualService(id: number) {
        return await this.notedRepository.deleteNotedPenjual(id)
    }
}