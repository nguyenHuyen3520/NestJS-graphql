/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
    imports: [],
    controllers: [],
    providers: [
        UsersService, UsersResolver
    ],
})
export class UsersModule {}
