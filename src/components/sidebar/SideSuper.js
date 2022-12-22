import React from "react";

function SideSuper(){
    return(
        <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="sa-dashboard.ejs"><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                    </li>
                    <li className="active">
                        <a href="/cabang"><i className="menu-icon fa fa-tasks"></i>Tambah Cabang</a>
                    </li>
                    <li className="active">
                        <a href="sa-tambah-karyawan.ejs"><i className="menu-icon fa fa-users"></i>Tambah Karyawan</a>
                    </li>
                    <li className="menu-item-has-children active dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Tambah Akun</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-user-circle"></i><a href="sa-m-akun-admin.ejs">Admin</a></li>
                            <li><i className="menu-icon fa fa-users"></i><a href="sa-m-akun-user.ejs">user</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
    )
}

export default SideSuper;