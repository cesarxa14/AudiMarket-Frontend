import http from '@/core/http-common'

class MusicalProducerService {
    endpoint = '/musical-producers';

    getAll() {
        return http.get(this.endpoint);
    }

    getById(id) {
        return http.get(`${this.endpoint}/${id}`);
    }

    create(createMusicalProducer) {
        return http.post(this.endpoint, createMusicalProducer);
    }
}

export default new MusicalProducerService()