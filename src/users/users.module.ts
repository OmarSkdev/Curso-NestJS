import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { UsersService } from './service/users.service';
import { UsersController } from './controllers/users.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
