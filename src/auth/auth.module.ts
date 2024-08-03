import { Global, Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UsersService } from 'src/users/service/users.service';
import { UsersModule } from 'src/users/service/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';
import { UsersProjectsEntity } from 'src/users/entities/usersProjects.entity';
import { UsersController } from 'src/users/controllers/users.controller';

@Global()
@Module({
  imports: [UsersModule ],  
  providers: [AuthService,UsersService],
  controllers: [AuthController],
  
})
export class AuthModule {}
