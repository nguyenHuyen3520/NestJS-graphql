/* eslint-disable prettier/prettier */
import { InputType, Field } from "@nestjs/graphql";
import {IsNotEmpty} from 'class-validator';
@InputType()
export class DeleteUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;
}