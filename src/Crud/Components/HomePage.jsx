import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteUser, getUserData } from '../Api/Api'
import { toast } from 'react-toastify'


const HomePage = () => {

    const [studata, setStudata] = useState([])

    const getData = async () => {
        const result = await getUserData()
        setStudata(result?.data)
    }

    const deleteUserData = async(id)=>{
        await deleteUser(id)
        getData()
        toast.error('delete successfully')
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>

            <div className="container">
                <br />
                <h2 style={{textAlign:'center'}}>User Details</h2>
                <br />

            <Link to='/add' className='btn btn-primary'>Add User</Link>

                <table style={{border:'1px solid #38d28f'}}  class="table">
                    <thead>
                        <tr style={{backgroundColor:'#5bdeb7'}}>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">City</th>
                            <th scope="col">Class</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            studata.data?.map((item,index) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{item.name}</th>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.city}</td>
                                            <td>{item.class}</td>
                                            <td><Link to={`/update/${item._id}`} className='btn btn-warning'>Update</Link></td>
                                            <td><Link onClick={()=>deleteUserData(item._id)} className='btn btn-danger'>Delete</Link></td>

                                        </tr>



                                    </>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>


        </>
    )
}

export default HomePage