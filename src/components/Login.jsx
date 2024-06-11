import React from 'react'

const Login = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <div class="text-center">
                                    <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registration-email-account_335657-936.jpg" class="rounded" alt="..."></img>
                                </div>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <div class="card">
                                    <img src="https://img.freepik.com/premium-vector/person-icon-design-template-isolated-avatar-sign-vector-illustration_109161-3505.jpg
" class="card-img-top" height="300px" width="100px" alt="..."></img>

                                    <div class="card-body">
                                        <h2 class="card-title text-center">User login</h2>



                                        <div className="row g-3">



                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                                <label htmlFor="" className="form-label">User Name</label>
                                                <input type="text" className="form-control" />

                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                                <label htmlFor="" className="form-label">Password</label>
                                                <input type="password" name="" id="" className="form-control" />

                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                                <button className=" btn btn-success">login</button>

                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                           <h5><b><a  href="#">Sign up</a></b> here to create new account</h5>

                                            </div>
                                        </div>



                                    </div>



                                </div>
                            </div>







                        </div>



                    </div>
                </div>
            </div>



        </div>
    )
}

export default Login