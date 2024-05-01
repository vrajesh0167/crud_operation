import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Read() {
    const [data, setData] = useState([])
    const { id }= useParams();

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    })
    return (
        <div>
            <section className=' read_section'>
                <div className=' container-fluid'>
                    <div className='read_list'>
                        <h3 className=' text-center'>Details of User</h3>
                        <div>
                            <h4>Name: <span>{data.name}</span></h4>
                        </div>
                        <div>
                            <h4>Username: <span>{data.username}</span></h4>
                        </div>
                        <div>
                            <h4>Email: <span>{data.email}</span></h4>
                        </div>
                        <div className=' mt-4 text-center'>
                            <Link to={'/'} className='btn1 text-decoration-none'>Back</Link>
                        </div>
                            
                    </div>
                </div>
            </section>
        </div>
    )
}
