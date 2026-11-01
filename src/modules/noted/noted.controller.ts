import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { NotedService } from "./noted.service.js";
import { Roles } from "../auth/guarded/roles.decorator.js";
import { Role } from "../../generated/prisma/enums.js";
import { RolesGuard } from "../auth/guarded/roles.guard.js";

@Controller('noted')
@UseGuards(RolesGuard)
export class NotedController {
    constructor(private readonly notedservice: NotedService) { }

    @Get()
    @Roles(Role.user)
    async getAllNotesCustomersController(userId: number) {
        return await this.notedservice.getAllNotesCustomersService(userId)
    }

    @Get('/penjual')
    @Roles(Role.penjual)
    async getAllNotesPenjualController() {
        return await this.notedservice.getAllNotesPenjualService()
    }

    @Post('/penjual')
    @Roles(Role.penjual)
    async PostNotedPenjualController(@Body() body: { userId: number, notes: string }) {
        return await this.notedservice.PostNotedPenjualService(body.userId, body.notes)
    }

    @Put('/penjual/:id')
    @Roles(Role.penjual)
    async UpdateNotedPenjualController(@Param('id', ParseIntPipe) id: number, @Body() body: { userId: number, notes: string }) {
        return await this.notedservice.updatePenjualService(id, body.userId, body.notes)
    }

    @Delete('/penjual/:id')
    @Roles(Role.penjual)
    async DeleteNotedPenjualController(@Param('id', ParseIntPipe) id: number) {
        return await this.notedservice.deletePenjualService(id)
    }
}