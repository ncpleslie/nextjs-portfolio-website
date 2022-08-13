import DB from "../database/db";
import Project from "../models/project.model";
import BaseService from "./base.service";

export default class ProjectService extends BaseService {
  constructor(db: DB) {
    super(db);
  }

  public async getProjectById(id: string): Promise<Project> {
    return (await this.db.getProjectById(id)).project;
  }

  public async getProjects(): Promise<Project[]> {
    return (await this.db.getProjects()).projects;
  }
}
