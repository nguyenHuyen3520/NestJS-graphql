/* eslint-disable prettier/prettier */
import { InputType, Field } from "@nestjs/graphql";
import {IsNotEmpty, IsOptional} from 'class-validator';
@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()

    userId: string;

    @Field()
    @IsNotEmpty()

    email: string;

    @Field()
    @IsOptional()
    @IsNotEmpty()
    age: number;

    @Field({nullable: true})
    @IsOptional()
    isMale?: boolean;
}