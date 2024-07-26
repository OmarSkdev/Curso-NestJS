import { BaseEntity } from "src/config/base.entity";
import { IProject } from "../../interfaces/project.interface";
import { UsersEntity } from "../../users/entities/users.entity";
import { UsersProjectsEntity } from "../../users/entities/usersProjects.entity";
import { Column, OneToMany } from "typeorm";

export class ProjectsEntity extends BaseEntity implements IProject {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(
    () => UsersProjectsEntity,
    (usersProjects) => usersProjects.project,
  )
  usersIncludes: UsersProjectsEntity[];
}