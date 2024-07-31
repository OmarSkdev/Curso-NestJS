import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProjectsService } from '../service/project.service';
import { ProjectDTO, ProjectUpdateDTO } from '../dto/project.dto';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService){}

    @Post('create')
    public async createProject(@Body() body: ProjectDTO){
        return await this.projectService.createProject(body);
    }

    @Get('all')
    public async findAllProjects() {
      return await this.projectService.findProjects();
    }

    @Get(':id')
    public async findProjectById(@Param('id') id: string) {
    return await this.projectService.findProjectById(id);
    }

    @Post('add-to-project')
    public async addToProject(@Body() body:any){
        
    }

    @Put('edit/:id')
    public async updateProject(@Param('id') id:string, @Body() body: ProjectUpdateDTO) {
        return await this.projectService.updateProject(body, id);
    }
  
}
