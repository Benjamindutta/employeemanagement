import axios from "axios";

const EMPLOYEE_API_BASE_URL = '/api/v1/employees';
class Employeeservices {
    getEmployees() {
        console.log(EMPLOYEE_API_BASE_URL);
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    postEmployee(e) {
        return axios.post(EMPLOYEE_API_BASE_URL, e);
    }
    getEmployeeByid(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + `/${id}`)
    }
    updateEmployee(id, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + `/${id}`, employee);
    }
    deleteEmploye(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + `/${id}`);
    }
}
export default new Employeeservices();
