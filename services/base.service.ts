import DB from "../database/db";

export default abstract class BaseService {
    protected db: DB;

    constructor(db: DB) {
        this.db = db;
    }
}