import http from '@/core/http-common'

class MusicalProducerService {
    endpoint = '/playlists';

    getAll() {
        return http.get(this.endpoint);
    }

    getById(id) {
        return http.get(`${this.endpoint}/${id}`);
    }

    editProfile(id, data) {
        return http.put(`${this.endpoint}/${id}`, data)
    }

    getPlayListsById(id) {
        return http.get(`${this.endpoint}/${id}/playlists`);
    }

    sortTopPlayLists() {
        return http.get(`${this.endpoint}?_sort=rating&_order=desc`)
    }

    create(createPlayList) {
        return http.post(this.endpoint, createPlayList);
    }

    getProjectsById(id) {
        return http.get(`${this.endpoint}/${id}/projects`);
    }

    update(id, data) {
        return http.put(`${this.endpoint}/${ id }`, data);
    }

    delete(id) {
        return http.delete(`${this.endpoint}/${ id }`);
    }

    getPlayListById(id) {
        return http.get(`${this.endpoint}/${id}/playlists`);
    }
}

export default new MusicalProducerService()


