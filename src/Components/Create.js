import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Create() {
    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
    })

    const navigate = useNavigate();  

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <section className='update_section'>
                <div className=' container-fluid'>
                    <form action="" onSubmit={formSubmitHandler}>
                        <legend className='text-center'>Update User</legend>
                        <div className="mb-3">
                            <div className=' form-input'>
                                <label htmlFor="" className="form-label text-center">Name :</label>
                                <input type="text" name='name' value={values.name} onChange={e => setValues({...values, name: e.target.value})} className="form-control" placeholder="Enter Your Name" />
                            </div>
                            <div className=' form-input'>
                                <label htmlFor="" className="form-label text-center">Username :</label>
                                <input type="text" name='username' value={values.username} onChange={e => setValues({...values, username: e.target.value})} className="form-control" placeholder="Enter Your Username" />
                            </div>
                            <div className=' form-input'>
                                <label htmlFor="" className="form-label text-center">Email :</label>
                                <input type="email" name='email' value={values.email} onChange={e => setValues({...values, email : e.target.value})} className="form-control" placeholder="Enter Your Email" />
                            </div>
                            <div className=' text-center'>
                                <button className='btn1' type="submit">Submit</button> 
                                <Link to={'/'} className='btn1 text-decoration-none'>Back</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
