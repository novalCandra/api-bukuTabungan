import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../infrastructure/database/database.service.js";
import { CreateNotedDto } from "./dto/create.noted.dto.js";
import { UpdateDtoNotes } from "./dto/update.noted.dto.js";

@Injectable()
export class NotedRepository {
    constructor(private readonly databaseservice: DatabaseService) { }

    async getAllNotesCustomers(userId: number) {
        return await this.databaseservice.deskripsi.findMany({
            where: {
                user: {
                    id: userId,
                }
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })
    }

    async getAllNotesPenjual() {
        return await this.databaseservice.deskripsi.findMany({})
    }

    async PostNotedPenjual(createDto: CreateNotedDto) {
        const data = await this.databaseservice.deskripsi.create({
            data: {
                userId: createDto.user.id,
                notes: createDto.notes
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })
        return {
            message: "sucess create data",
            data: {
                user: data.user,
                notes: data.notes
            }
        };
    }

    async updateNotedPenjual(id: number, updateDto: CreateNotedDto) {
        const data = await this.databaseservice.deskripsi.update({
            where: {
                id: id
            },
            data: {
                userId: updateDto.user.id,
                notes: updateDto.notes
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })

        return {
            message: "success update date",
            data: {
                user: data.user.name,
                notes: data.notes
            }
        }
    }

    async deleteNotedPenjual(id: number) {
        await this.databaseservice.deskripsi.delete({ where: { id: id } })
        return {
            message: `Success delete noted`
        }
    }
}