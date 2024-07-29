import { Module } from '@nestjs/common';
import { ProjectsController } from './controllers/projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsEntity } from './entities/projects.entity';
import { ProjectsService } from './service/project.service';
import { UsersProjectsEntity } from 'src/users/entities/usersProjects.entity';
import { UsersService } from 'src/users/service/users.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProjectsEntity])
  
  ],
  providers: [ProjectsService],
  controllers:[ProjectsController],

  
})
export class ProjectsModule {}
