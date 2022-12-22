import React, { useState, useEffect } from "react";
import axios from "axios";

function SATambahCabang(){
    const [cabang, setCabang] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/cabang')
            .then(res => {
                setCabang(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteCabang = async (id_table_cabang) => {
        try{
            await axios.delete(`http://localhost:3010/cabang/delete/${id_table_cabang}`)
        } catch (error){
            alert(error)
        }
    }

    return(
        <div className="orders">
            <a href="/cabang/form">
                    <button type="button" class="btn btn-primary fa fa-plus" > Tambah</button>
                </a>
                    <div className="row" style={{marginTop:'8px'}}>
                        <div className="col-xl-7">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="box-title">Data Cabang </h4>
                                </div>
                                <div className="card-body--">
                                    <div className="table-stats order-table ov-h">
                                       <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th className="serial">No</th>
                                                    <th>ID Cabang</th>
                                                    <th>Name</th>
                                                    <th>Lokasi</th>
                                                    <th className="th-o">Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {cabang.map((cabang, index) => (
                                                        <tr key={cabang.id_table_cabang}>
                                                        <td className="serial"><span className="id-column">{index + 1}</span></td>
                                                        <td> <span className="name-column">{cabang.id_cabang}</span></td>
                                                        <td> <span className="name-column">{cabang.nama_cabang}</span> </td>
                                                        <td> <span className="name-column">{cabang.lokasi}</span> </td>
                                                        <td>
                                                        <a href={`/cabang/edit/${cabang.id_table_cabang}`}>
                                                        <span className="badge badge-complete">Edit</span>
                                                        </a>
                                                        <a href={`/cabang/delete/${cabang.id_table_cabang}`} 
                                                        onClick={() => deleteCabang(cabang.id_table_cabang)}>
                                                            <span className="badge badge-danger">Delete</span>
                                                        </a>
                                                        </td>
                                                        </tr>
                                                    ))}                         
                                            </tbody>
                                        </table>
                                    </div> 
                                </div>
                            </div> 
                        </div>  
                        </div> 
                    </div>
    );
}

export default SATambahCabang;
