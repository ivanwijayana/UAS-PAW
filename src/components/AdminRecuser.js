import React from "react";
import AdminTabelRecuser from "./admin/AdminTabelRecuser";
import SuperHeader from "./header/SuperHeader";
import SideAdmin from "./sidebar/SideAdmin";

function AdminRecuser(){
    const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px'
    };

    return(
        <div style={containerStyles}>
            <SuperHeader/>
            <div className="left-panel" style={{width:'5%'}}>
            <SideAdmin/>
            </div>
            <div className="content" style={{marginRight:'-15%'}}>
            <AdminTabelRecuser/>
            </div>
        </div>
    )
}

export default AdminRecuser;