import DB from "../database/db";
import { ServiceKey } from "../enums/service-key.enum";
import BaseService from "../services/base.service";
import ProfileService from "../services/profile.service";
import ProjectService from "../services/project.service";

export default class ServiceProvider {
    private static isInit = false;
    private static instances: { [ServiceKey: string]: BaseService };

    public static init(): void {
        const db = new DB();
        const profileService = new ProfileService(db);
        const projectService = new ProjectService(db);

        ServiceProvider.instances = {
            [ServiceKey.Project]: projectService,
            [ServiceKey.Profile]: profileService
        }

        ServiceProvider.isInit = true;
    }

    public static get<T>(key: ServiceKey): T {
        if (!ServiceProvider.isInit) {
            ServiceProvider.init();
        }

        if (!ServiceProvider.instances[key]) {
            throw Error('Service not found');
        }

        return (ServiceProvider.instances[key] as unknown) as T;
    }
}