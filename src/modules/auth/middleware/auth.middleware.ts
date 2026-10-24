import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import {JwtService} from "@nestjs/jwt"
import { DatabaseService } from "../../../infrastructure/database/database.service.js";
@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private jwt : JwtService, private databaseSerice : DatabaseService){}
    async use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token) throw new UnauthorizedException();

        try {
            const payload = await this.jwt.verifyAsync(token, {
                secret : process.env.SUPABASE_JWT_SECRET
            })
            const profile = await this.databaseSerice.users.findUnique({
                where : {id : payload.id}
            })
            if(!profile) throw new UnauthorizedException();

            (req as any).user = profile
            next()
        } catch (error) {
            throw new UnauthorizedException(error)
        }
        next()
    }
}