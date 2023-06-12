import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getEditUser, updateUser} from '../Api/Api'
import { toast } from 'react-toastify'




const initialValue = {
  name: "",
  email: "",
  phone: "",
  city: "",
  class: ""
}
const UpdateUsers = () => {
  const[user,setUser]=useState(initialValue)
  const[error,setError]=useState({})
  const navigate=useNavigate()
  const {id}=useParams()


  const validation = () => {
    let error = {}
    if (!user.name) {
      error.name = "Please Submit Your Name"
    }
    if (!user.email) {
      error.email = "Please Give Your Mail Id"
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
      error.email = "Please Enter Your Mail Id"

    }
    if (!user.phone) {
      error.phone = "Please Enter Your Ph Number"
    }
    if (!user.city) {
      error.phone = "Please Enter Your Cityname"

    }
    if (!user.class) {
      error.class = "Please Enter Your Classname"
    }
    return error

  }

  let name, value

  const postValidation = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })

    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "@Name is Required" })
        setUser({ ...user, name: "" })
      } else {
        setError({ ...error, name: "" })
        setUser({ ...user, name: value })

      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "@Email is Required" })
        setUser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: value })


      }
    }
    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "@Phone is Required" })
        setUser({ ...user, phone: "" })
      } else {
        setError({ ...error, phone: "" })
        setUser({ ...user, phone: value })


      }
    }
    if (name === "city") {
      if (value.length === 0) {
        setError({ ...error, city: "@Cityname is Required" })
        setUser({ ...user, city: "" })
      } else {
        setError({ ...error, city: "" })
        setUser({ ...user, city: value })

      }
    }
    if (name === "class") {
      if (value.length === 0) {
        setError({ ...error, class: "@Class is Required" })
        setUser({ ...user, class: "" })
      } else {
        setError({ ...error, class: "" })
        setUser({ ...user, class: value })

      }
    }

  }

  const updateDetails = async()=>{
    await updateUser(user,id)
    navigate('/')
    toast('Data updated successfully')
  }


  const getEditData = async()=>{
    const result = await getEditUser(id)
    setUser(result?.data)
  }

  useEffect(()=>{
    getEditData()
  },[])


  
  const submission = (e) => {
    e.preventDefault()
    let errorList = validation()
    setError(errorList)    

  }

 

  return (
    <>
    
    <div className="container">
      <h3 style={{textAlign:'center'}}>Update Users</h3>
    <form onSubmit={submission} className="container mt-5">
        <div>
          <label> Name </label>
          <input type="text" className="form-control" name="name" value={user.name} onChange={e => postValidation(e)} />
          <span style={{ color: "red", marginLeft: "24px" }}>{error.name}</span>
        </div>
        <div className="form-group">
          <label>Email Id</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={e => postValidation(e)} />
          <span style={{ color: "red", marginLeft: "24px" }}>{error.email}</span>

        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="number" className="form-control" name='phone' value={user.phone} onChange={e => postValidation(e)} />
          <span style={{ color: "red", marginLeft: "24px" }}>{error.phone}</span>

        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" className="form-control" name='city' value={user.city} onChange={e => postValidation(e)} />
          <span style={{ color: "red", marginLeft: "24px" }}>{error.city}</span>

        </div>
        <div className="form-group">
          <label>Class</label>
          <input type="text" className="form-control" name='class' value={user.class} onChange={e => postValidation(e)} />
          <span style={{ color: "red", marginLeft: "24px" }}>{error.class}</span>

        </div>

        <button type="submit" className="btn btn-primary" onClick={()=>updateDetails()}>Update User</button>
      </form>
      </div>
    </>
  )
}

export default UpdateUsers