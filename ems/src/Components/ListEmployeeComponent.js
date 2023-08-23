import React, { useEffect, useState } from 'react'
import Employeeservices from '../Services/Employeeservices';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        Employeeservices.getEmployees()
            .then((res) => {
                setEmployees(res.data);
            })
    }, [])

    function Updateinfo(id) {
        navigate(`/update-employee/${id}`);
    }

    function deleteinfo(id) {
        Employeeservices.deleteEmploye(id).then((res) => {
            setEmployees(employees.filter(e => e.id !== id));
        });
    }
    return (
        <div>
            <h2 className='text-center'>Employee's List</h2>
            <div >
                <button className='btn btn-primary' onClick={() => navigate('/addemployee')}>AddEmployee</button>
            </div >
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee first name</th>
                            <th>Employee last name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees ? employees.map((employee) =>
                                <tr key={employee.id}>
                                    <td>
                                        {employee.firstName}
                                    </td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => Updateinfo(employee.id)}>Update</button>

                                        <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleteinfo(employee.id)}>Delete</button>

                                    </td>
                                </tr>) : <></>
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ListEmployeeComponent;
