/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Mutation} from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/get-user.agrs";
import { GetUsersArgs } from "./dto/args/get-users.agrs";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./models/users";
import { UsersService } from "./users.service";

@Resolver(()=> User)

export class UsersResolver{
    constructor(private readonly usersService: UsersService){}
    
    @Query(()=> User, { name: 'user', nullable: true}) 
    
    getUser(@Args() getUserArg: GetUserArgs): User{
        return this.usersService.getUser(getUserArg);
    }

    @Query(()=> [User], {name: 'users', nullable: 'items'})
    getUsers(): User[]{
        return this.usersService.getUsers();
    }

    @Mutation(()=> User)
    createUser(@Args('createUserData') createUserData: CreateUserInput): User{        
        return this.usersService.createUser(createUserData);
    }

    @Mutation(()=> User)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User{ 
        return this.usersService.updateUser(updateUserData);
    }

    @Mutation(()=> User)
    deleteUser(@Args('deleteUserData') deleteUserData:DeleteUserInput) : User{ 
        return this.usersService.deleteUser(deleteUserData);
    }
}