import http from '@/core/http-common'

class MusicalProducerService {
    endpoint = '/musicproducers/auth';

    loginMusicProducer(user) {
        return http.post(`${this.endpoint}/sign-in`, user);
    }

}

export default new MusicalProducerService()