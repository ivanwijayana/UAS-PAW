import React from "react";
import AdminTabelRecexp from "./admin/AdminTabelRecexp";
import SuperHeader from "./header/SuperHeader";
import SideAdmin from "./sidebar/SideAdmin";

function AdminRecexp(){
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
            <div className="content">
            <AdminTabelRecexp/>
            </div>
        </div>
    )
}

export default AdminRecexp;