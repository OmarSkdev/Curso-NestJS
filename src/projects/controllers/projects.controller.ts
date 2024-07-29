import { Body, Controller, Param, Post } from '@nestjs/common';
import { ProjectsService } from '../service/project.service';
import { ProjectDTO } from '../dto/project.dto';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService){}

    @Post('create')
    public async createProject(@Body() body: ProjectDTO){
        return await this.projectService.createProject(body);
    }
}
