import { InjectRepository } from "@nestjs/typeorm";
import { ProjectsEntity } from "../entities/projects.entity";
import { Repository, UpdateResult } from "typeorm";
import { UsersEntity } from "src/users/entities/users.entity";
import { ProjectDTO, ProjectUpdateDTO } from "../dto/project.dto";
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

    public async findProjects(): Promise<ProjectsEntity[]> {
      try {
        const projects: ProjectsEntity[] = await this.projectRepository.find();
        if (projects.length === 0) {
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: 'No se encontro resultado',
          });
        }
        return projects;
        
      } catch (error) {
        throw ErrorManager.createSignatureError(error.message);
      }
    }

    public async findProjectById(id:string): Promise<ProjectsEntity>{
      try {
        const project = await this.projectRepository
        .createQueryBuilder('project')
        .where({ id })
        .getOne();
      if (!project) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No existe proyecto con el id ' + id,
        });
      }
      return project;
        
      } catch (error) {
        throw ErrorManager.createSignatureError(error.message);
      }
    }

    public async updateProject(body: ProjectUpdateDTO, id: string): Promise<UpdateResult | undefined> {
      try {
        const project: UpdateResult = await this.projectRepository.update(
          id,
          body,
        );
        if (project.affected === 0) {
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: 'No se pudo actualizar proyecto',
          });
        }
        return project;
      } catch (error) {
        throw ErrorManager.createSignatureError(error.message);
      }
    }
}