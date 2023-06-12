import axios from "axios"

// get.....

const ApiUrl_1 = 'https://restfullapinodejs1.onrender.com/api/allstudent'

export const getUserData = async()=>{
    try{
        return await axios.get(ApiUrl_1)
    }
    catch(error){
        console.log("Error while calling getUserData Api",error.message);
    }
}


// add.....

const ApiUrl_2 = 'https://restfullapinodejs1.onrender.com/api/student'

export const addUserData =async(data)=>{
    try{
        return await axios.post(ApiUrl_2,data)
    }
    catch(error){
        console.log("Error while calling addUserData Api",error.message);

    }
}

// getedit...

const ApiUrl_3 = 'https://restfullapinodejs1.onrender.com/api/edit'

export const getEditUser = async(data)=>{
    try{
        return await axios.get(`${ApiUrl_3}/${data}`)
    }
    catch(error){
        console.log("Error while calling getEditUser Api",error.message);

    }
}

// update...

const ApiUrl_4 = 'https://restfullapinodejs1.onrender.com/api/update'

export const updateUser = async(data,id)=>{
    try{
        return await axios.post(`${ApiUrl_4}/${id}`,data)
    }
    catch(error){
        console.log("Error while calling updateUser Api",error.message);

    }
}

// delete..

const ApiUrl_5 = 'https://restfullapinodejs1.onrender.com/api/delete'

export const deleteUser = async id => {
    try {
        return await axios.delete(`${ApiUrl_5}/${id}`)
    }
    catch (error) {
        console.log('Error while calling deleteUser API', error.message)
    }
}