import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from "@nestjs/common";
import { SavingService } from "./saving.service.js";
import { Roles } from "../auth/guarded/roles.decorator.js";
import { Role } from "../../generated/prisma/enums.js";
import { RolesGuard } from "../auth/guarded/roles.guard.js";
import { SavingGetDTO } from "./dto/saving.dto.js";

@Controller('saving')
@UseGuards(RolesGuard)
export class SavingController {
    constructor(private readonly savingservice: SavingService) { }

    @Get()
    @Roles(Role.user)
    async getallController(@Req() req: any) {
        return await this.savingservice.getAllSavingCustomerService(req.user.id)
    }

    @Get('/penjual')
    @Roles(Role.penjual)
    async getallSavingPenjualController() {
        return await this.savingservice.getallSavingPenjualService()
    }

    @Post('/penjual')
    @Roles(Role.penjual)
    async PostSavingPenjualController(@Body() body: { userId: number, balance: number, Date: Date, widrawalAmount: number }) {
        return await this.savingservice.postSavingpenjual({
            userId: body.userId,
            balance: body.balance,
            Date: body.Date,
            widrawalAmount: body.widrawalAmount
        })
    }

    @Put('/penjual/:id')
    @Roles(Role.penjual)
    async PutSavingPenjualController(@Param('id', ParseIntPipe) id: number, @Body() body: { userId: number, balance: number, Date: Date, widrawalAmount: number }) {
        return await this.savingservice.putSavingpenjualService(id, {
            userId: body.userId,
            balance: body.balance,
            Date: body.Date,
            widrawalAmount: body.widrawalAmount
        })
    }

    @Delete('/penjual/:id')
    @Roles(Role.penjual)
    async DeleteSavingPenjualController(@Param('id', ParseIntPipe) id: number) {
        return await this.savingservice.deleyeSavingPenjualService(id)
    }
}