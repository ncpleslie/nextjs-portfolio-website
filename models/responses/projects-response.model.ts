import Project from "../project.model";

export default class ProjectsResponse {
    constructor(response: { id: string, data: Project }[]) {
        this.projects = response.map(r => new Project(r.id, r.data));
    }

    public projects: Project[];
}