import React from "react";
import SideSuper from "./sidebar/SideSuper";
import SATambahCabang from "./superadmin/SATambahCabang";
import SuperHeader from "./header/SuperHeader";

function SACabang(){
    const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px'
    };

    return(
        <div style={containerStyles}>
            <SuperHeader/>
            <div className="left-panel" style={{width:'5%'}}>
            <SideSuper/>
            </div>
            <div className="content">
            <SATambahCabang/>
            </div>
        </div>
    )
}

export default SACabang;