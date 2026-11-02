import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../infrastructure/database/database.service.js";
import { CreateNotedDto } from "./dto/create.noted.dto.js";

@Injectable()
export class NotedRepository {
    constructor(private readonly databaseservice: DatabaseService) { }

    async getAllNotesCustomers(userId: number) {
        return await this.databaseservice.deskripsi.findMany({
            where: {
                userId: userId
            }
        })
    }

    async getAllNotesPenjual() {
        return await this.databaseservice.deskripsi.findMany({})
    }

    async PostNotedPenjual(createDto: CreateNotedDto) {
        const data = await this.databaseservice.deskripsi.create({
            data: {
                userId: createDto.userId,
                notes: createDto.notes
            }
        })
        return data;
    }

    async updateNotedPenjual(id: number, userId: number, notes: string) {
        return await this.databaseservice.deskripsi.update({
            where: {
                id: id
            },
            data: {
                userId: userId,
                notes: notes
            }
        })
    }

    async deleteNotedPenjual(id: number) {
        await this.databaseservice.deskripsi.delete({ where: { id: id } })
        return {
            message: `Success delete noted`
        }
    }
}