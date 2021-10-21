import http from '@/core/http-common'

class ContractService {
    endpoint = '/contracts';

    getAll() {
        return http.get(this.endpoint);
    }

    createContract(newContract) {
        return http.post(this.endpoint, newContract);
    }

    getContractsByMProducer(id){
        return http.get(`${this.endpoint}/?idMProducer=${id}`)
    }
    getContractsByVProducer(id){
        return http.get(`${this.endpoint}/?idVProducer=${id}`)
    }




}

export default new ContractService()