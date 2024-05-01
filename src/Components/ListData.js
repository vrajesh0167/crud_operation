import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from './Loader'

export default function ListData() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data);
                setLoading(true)
            })
            .catch((error) => {
                console.log(error);
                setLoading(true)
            })
        }, 2000);
    })

    const navigate = useNavigate()

    const deleteUserHandler = (id) =>{
        console.log(id);

        const confirm = window.confirm(`would you like user ${id} to Delete ? `);
        if(confirm){
            axios.delete('https://jsonplaceholder.typicode.com/users/' + id )
            .then((res) => {
                window.location.reload(true);
                navigate('/');
            })
            .catch((err) =>{
                console.log(err);
            })
        }
    }
    return (
        <div>
            {loading ? (
                <section className='list_section'>
                    <div className=' container-fluid'>
                        <div className='list_deta'>
                            <div className=' d-flex justify-content-end mb-3'>
                                <Link to={"/create"} className='btn1 text-decoration-none'>Add +</Link>
                            </div>
                            <table className=' table table-bordered text-center'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>UserName</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((user, id) => {
                                        return <tr key={id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <Link to={`/read/${user.id}`} className='btn1 text-decoration-none'>Read</Link>
                                                <Link to={`/update/${user.id}`}className='btn1 text-decoration-none'>Edit</Link>
                                                <button className='btn1' onClick={() =>deleteUserHandler(user.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            ) : <Loader></Loader>}

        </div>
    )
}
