import { InjectRepository } from "@nestjs/typeorm";
import { ProjectsEntity } from "../entities/projects.entity";
import { Repository } from "typeorm";
import { UsersEntity } from "src/users/entities/users.entity";
import { ProjectDTO } from "../dto/project.dto";
import { Injectable } from "@nestjs/common";
import { UsersProjectsEntity } from "src/users/entities/usersProjects.entity";
import { UsersService } from "src/users/service/users.service";
import { ErrorManager } from "src/utils/error.manager";
import { ACCESS_LEVEL } from "src/constants/roles";

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(ProjectsEntity)
        private readonly projectRepository: Repository<ProjectsEntity>,
        
           
    ){}

    public async createProject(body: ProjectDTO): Promise<ProjectsEntity> {
        try {
          return await this.projectRepository.save(body);
        } catch (error) {
          throw ErrorManager.createSignatureError(error.message);
        }
    }
}