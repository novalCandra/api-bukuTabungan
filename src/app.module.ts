import {Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from './infrastructure/database/database.module.js';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './modules/auth/guarded/roles.guard.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      global : true,
      inject : [ConfigService],
      useFactory : (config : ConfigService) => ({
        secret : config.getOrThrow<string>("SUPABASE_JWT_SECRET"),
        signOptions : {expiresIn : "1h"}
      })
    }),
    DatabaseModule,
    AuthModule
  ],

  controllers: [AppController],
  providers: [AppService,
    { provide: APP_GUARD, useClass: RolesGuard } // + roles check features
  ],
})
export class AppModule { }

