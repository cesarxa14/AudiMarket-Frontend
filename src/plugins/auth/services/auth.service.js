import http from '@/core/http-common'

class AuthService {
    endpointMproducer = '/musicproducers/auth';
    endpointVproducer = '/videoproducers/auth';

    // ========== MUSIC PRODUCER =============
    loginMusicProducer(user) {
        return http.post(`${this.endpointMproducer}/sign-in`, user);
    }

    registerMusicProducer(user) {
        return http.post(`${this.endpointMproducer}/sign-up`, user)
    }
// ========== VIDEO PRODUCER =============
    loginVideoProducer(user) {
        return http.post(`${this.endpointVproducer}/sign-in`, user);
    }

    registerVideoProducer(user) {
        return http.post(`${this.endpointVproducer}/sign-up`, user)
    }

}

export default new AuthService()