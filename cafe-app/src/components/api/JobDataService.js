
import axios from 'axios';

class JobDataService {
    executeGetAllJobs() {
        return axios.get(`http://localhost:8080/jobs-list`);
    }

    executeFindJobById(id) {
        return axios.get(`http://localhost:8080/jobs/${id}`);
    }

    executeDeleteJobById(id) {
        return axios.delete(`http://localhost:8080/jobs/delete/${id}`);
    }

    executeCreateJob(job) {
        return axios.post(`http://localhost:8080/job/create`, job);
    }

    executeUpdateJob(id, job) {
        return axios.put(`http://localhost:8080/job/update/${id}`, job);
    }
}

export default new JobDataService();