import React, { useState } from 'react'
import { useInRouterContext } from 'react-router-dom'

const SignUp = () => {

    const [data, setData] = useState(

        {
            "name": "",
            "dob": "",
            "bloodgp": "",
            "mobNum": "",
            "address": "",
            "pin": "",
            "district": "",
            "place": "",
            "email": "",
            "userName": "",
            "password": ""
        }

    )

    const inputHandler = (event) => {

        setData({ ...data, [event.target.name]: event.target.value })

    }

    const readValue = () => {

        console.log(data)

    }




    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Date of birth</label>
                                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Blood Group</label>
                                <select  id="" className="form-control" name='bloodgp' value={data.bloodgp} onChange={inputHandler}>
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                </select>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" name='mobNum' value={data.mobNum} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">PIN CODE</label>
                                <input type="text" className="form-control" name='pin' value={data.pin} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">District</label>
                                <select  id="" className="form-control" name='district' value={data.district} onChange={useInRouterContext} >
                                    <option value="Thrissur">Thrissur</option>
                                    <option value="Ernankulam">Ernankulam</option>
                                    <option value="Wayanad">Wayanad</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">place</label>
                                <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">User Name</label>
                                <input type="text" className="form-control" name='userName' value={data.userName} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Password</label>
                                <input type="Password" className="form-control" name='password' value={data.password} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" />

                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Register</button>

                            </div>




                        </div>


                    </div>
                </div>
            </div>



        </div>
    )
}

export default SignUp