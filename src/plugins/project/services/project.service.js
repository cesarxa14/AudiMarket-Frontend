import http from '@/core/http-common'

class MusicalProducerService {
    endpoint = '/projects';

    getAll() {
        return http.get(this.endpoint);
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

export default new MusicalProducerService()