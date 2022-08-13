import Project from "../project.model";

export default class ProjectResponse {
    constructor(response: { id: string, data: Project }) {
        this.project = new Project(response.id, response.data);
    }

    public project: Project;
}