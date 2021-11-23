import http from '@/core/http-common'

class ReseñaService {
    endpoint = '/reviews';

    getAll() {
        return http.get(this.endpoint);
    }

    getByIDMProducer(id) {
        return http.get(`${this.endpoint}?idMProducer=${id}`);
    }

    createReseña(newReseña){
        return http.post(this.endpoint, newReseña);
    }


}

export default new ReseñaService()