import http from '@/core/http-common'

class VideoProducerService {
    endpoint = '/videoproducers';

    getAll() {
        return http.get(this.endpoint);
    }

    getById(id) {
        return http.get(`${this.endpoint}/${id}`);
    }

    editProfile(id, data) {
        return http.put(`${this.endpoint}/${id}`, data)
    }




    create(user) {
        return http.post(this.endpoint, user);
    }


    getContractsById(id) {
        return http.get(`${this.endpoint}/${id}/contracts`);
    }


    delete(id) {
        return http.delete(`${this.endpoint}/${ id }`);
    }
}

export default new VideoProducerService()