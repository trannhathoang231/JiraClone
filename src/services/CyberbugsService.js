import BaseServices from "./baseServices";


class CyberbugsService extends BaseServices {
    constructor() {
        super();
    }

    getAllProjectCategory = () => {
        return this.get('/api/ProjectCategory')
    }

    getListProject = () => {
        return this.get("/api/Project/getAllProject");
    }

}

export const cyberbugsService = new CyberbugsService();