import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div class="sufee-login d-flex align-content-center flex-wrap">
            <div class="container">
                <div class="login-content">
                    <div class="login-logo">                    
                    </div>
                    <div class="login-form">
                        <div class="social-login-content">
                            <div class="social-button">
                                <Link className='btn btn-success btn-flat m-b-30 m-t-30' to={`/login-user`}>Log in as User</Link>
                                <Link className='btn social facebook btn-flat btn-addon mb-3' to={`/login-admin`}>Log in as Admin</Link>
                                <Link className='btn social twitter btn-flat btn-addon mt-3' to={`/login-superadmin`}>Log in as Super Admin</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;