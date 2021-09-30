import http from '@/core/http-common'

class MusicalProducerService {
    endpoint = '/musical-producers';

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

    create(createMusicalProducer) {
        return http.post(this.endpoint, createMusicalProducer);
    }


    update(id, data) {
        return http.put(`${this.endpoint}/${ id }`, data);
    }

    delete(id) {
        return http.delete(`${this.endpoint}/${ id }`);
    }
}

export default new MusicalProducerService()