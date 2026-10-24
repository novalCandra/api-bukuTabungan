import { CanActivate, Injectable, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "../../../generated/prisma/enums.js";
import { ROLES_KEY } from "./roles.decorator.js";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(ctx: ExecutionContext) {
        // read sebuah table
        const required = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            ctx.getHandler(),
            ctx.getClass()
        ])

        // no label : anyone logged in can enter
        if (!required) return true

        // compare with the user's role
        const { user } = ctx.switchToHttp().getRequest();
        return required.includes(user.role) // true = open, false = 403
    }
}