import React from "react";

function SuperHeader(){
    return(
        <div id="right-panel" className="right-panel">
        <header id="header" className="header">
            <div className="top-left">
                <div className="navbar-header">
                    <a className="navbar-brand" href="">GO Express</a>

                    <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a>
                </div>
            </div>
            <div className="top-right">
                <div className="header-menu">
                    <div className="header-left">
                        <button className="search-trigger"><i className="fa fa-search"></i></button>
                        <div className="form-inline">
                            <form className="search-form">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search"></input>
                                <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                            </form>
                        </div>
                        <div className="dropdown for-notification">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-bell"></i>
                                <span className="count bg-danger"></span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="notification">
                                <p className="red">You have 0 Notification</p>
                                
                            </div>
                        </div>

                        <div className="dropdown for-message">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="message" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-envelope"></i>
                                <span className="count bg-primary"></span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="message">
                                <p className="red">You have 0 Mails</p>
                            </div>
                        </div>
                    </div>

                    <div className="user-area dropdown float-right">
                        <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar"></img>
                        </a>

                        <div className="user-menu dropdown-menu">
                            <a className="nav-link" href="#"><i className="fa fa- user"></i>My Profile</a>

                            <a className="nav-link" href="#"><i className="fa fa- user"></i>Notifications <span className="count">13</span></a>

                            <a className="nav-link" href="#"><i className="fa fa -cog"></i>Settings</a>

                            <a className="nav-link" href="#"><i className="fa fa-power -off"></i>Logout</a>
                        </div>
                    </div>

                </div>
            </div>
            </header>
            </div>
    )
}

export default SuperHeader;