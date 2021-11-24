import http from '@/core/http-common'

class PublicationService {
    endpoint = '/publications';

    getAll() {
        return http.get(this.endpoint);
    }

    create(pub){
        return http.post(this.endpoint, pub)
    }

    getById(id) {
        return http.get(`${this.endpoint}/${id}`);
    }

    editProfile(id, data) {
        return http.put(`${this.endpoint}/${id}`, data)
    }


}

export default new PublicationService()