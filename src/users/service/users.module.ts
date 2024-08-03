import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { UsersProjectsEntity } from '../entities/usersProjects.entity';
import { UsersService } from './users.service';
import { UsersController } from '../controllers/users.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersEntity,UsersProjectsEntity])
    ],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService, TypeOrmModule]
})
export class UsersModule {}
