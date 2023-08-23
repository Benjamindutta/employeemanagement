import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Employeeservices from '../Services/Employeeservices';

const CreateEmployee = () => {

    const { id } = useParams();
    const [user, setUser] = useState({
        id: id,
        firstName: '',
        lastName: '',
        emailId: '',
    });
    const navigate = useNavigate();
    function saveOrUpdateForm(e) {
        let employee = { firstName: user.firstName, lastName: user.lastName, emailId: user.emailId };
        Employeeservices.postEmployee(employee).then((res) => {
            navigate('/employees');
        })
    }
    return (
        <div className='container'>
            <Card className='card col-md-6 offset-md-3 offset-md-3 p-4 mt-5'>
                <h3 className='text-center'>Add Employee</h3>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" value={user.firstName} placeholder="Enter First Name" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>last Name:</Form.Label>
                        <Form.Control type="text" value={user.lastName} placeholder="Enter Last Name" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={user.emailId} placeholder="Enter email" onChange={(e) => setUser({ ...user, emailId: e.target.value })} />
                    </Form.Group>
                    <div className='d-flex justify-content-between'>
                        <Button variant='success' onClick={(e) => saveOrUpdateForm(e)}>save</Button>
                        <Button variant='danger' onClick={() => navigate('/employees')}>Cancel</Button>
                    </div>
                </Form>
            </Card>
        </div>
    )
}

export default CreateEmployee
