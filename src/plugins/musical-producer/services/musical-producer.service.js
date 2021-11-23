import http from '@/core/http-common'

class MusicalProducerService {
    endpoint = '/musicproducers';

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

    sortTopProducers() {
        return http.get(`${this.endpoint}?_sort=rating&_order=desc`)
    }

    create(createMusicalProducer) {
        return http.post(this.endpoint, createMusicalProducer);
    }

    getPlayListsById(id) {
        return http.get(`${this.endpoint}/${id}/playlists`);
    }

    getReviewsById(id) {
        return http.get(`${this.endpoint}/${id}/reviews`);
    }

    getContractsById(id) {
        return http.get(`${this.endpoint}/${id}/contracts`);
    }

    getPublicationsById(id) {
        return http.get(`${this.endpoint}/${id}/publications`);
    }

    update(id, data) {
        return http.put(`${this.endpoint}/${ id }`, data);
    }

    delete(id) {
        return http.delete(`${this.endpoint}/${ id }`);
    }
}

export default new MusicalProducerService()