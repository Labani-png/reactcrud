import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import AddUsers from './Components/AddUsers'
import UpdateUsers from './Components/UpdateUsers'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Crudrouting = () => {
    return (
        <>
         <ToastContainer />
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/add' element={<AddUsers/>}/>
                    <Route path='/update/:id' element={<UpdateUsers/>}/>
                </Routes>
            </Router>


        </>
    )
}

export default Crudrouting