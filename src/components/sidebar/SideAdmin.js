import React from "react";

function SideAdmin(){
    return(
        <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="menu-item-has-children active dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-laptop"></i>Dashboard</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-home"></i><a href="/recuser">Laporan Penerimaan Barang dari User</a></li>
                            <li><i class="menu-icon fa fa-home"></i><a href="/recexp">Laporan Penerimaan Barang Transit</a></li>
                            <li><i class="menu-icon fa fa-truck"></i><a href="admin-db-sentran.ejs">Laporan Pengiriman Barang Transit</a></li>
                            <li><i class="menu-icon fa fa-truck"></i><a href="admin-db-senrec.ejs">Laporan Pengiriman Barang ke Penerima</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children active dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-th"></i>Pengiriman</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-truck"></i><a href="admin-kirim-transit.ejs">Transit</a></li>
                            <li><i class="menu-icon fa fa-home"></i><a href="admin-kirim-penerima.ejs">Penerima</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children active dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-archive"></i>Penerimaan</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-user"></i><a href="/recuser/form">User</a></li>
                            <li><i class="menu-icon fa fa-exchange"></i><a href="/recexp/form">Ekspedisi</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
    )
}

export default SideAdmin;