import http from '@/core/http-common'

class UserService {
    endpoint = '/users';

    getAll() {
        return http.get(this.endpoint);
    }

    getById(id) {
        return http.get(`${this.endpoint}/${id}`);
    }

    editProfile(id, data) {
        return http.post(`${this.endpoint}/${id}`, data)
    }




    create(createMusicalProducer) {
        return http.post(this.endpoint, createMusicalProducer);
    }
}

export default new UserService()