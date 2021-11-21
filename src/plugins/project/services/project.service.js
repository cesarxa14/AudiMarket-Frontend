import http from '@/core/http-common'

class PlayListsService {
    endpoint = '/projects';

    getAll() {
        return http.get(this.endpoint);
    }

    createProject(item) {
        return http.post(this.endpoint, item);
    }

    getById(id) {
        return http.get(`${this.endpoint}/${id}`);
    }

    editProfile(id, data) {
        return http.put(`${this.endpoint}/${id}`, data)
    }

    getProjectsById(id) {
        return http.get(`${this.endpoint}/${id}/projects`);
    }
}

export default new PlayListsService()