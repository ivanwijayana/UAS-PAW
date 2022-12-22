import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminTabelRecuser(){
    const [recuser, setRecuser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/recuser')
            .then(res => {
                setRecuser(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteRecuser = async (id_rec_user) => {
        try{
            await axios.delete(`http://localhost:3010/recuser/delete/${id_rec_user}`)
        } catch (error){
            alert(error)
        }
    }

    return(
        <div className="orders">
        <div className="row">
            <div className="col-xl-10">
                <div className="card">
                    <div className="card-body">
                        <h4 className="box-title">Penerimaan dari User</h4>
                    </div>
                    <div className="card-body--">
                        <div className="table-stats order-table ov-h">
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th className="serial">#</th>
                                        <th>ID Barang</th>
                                        <th>Nama Barang</th>
                                        <th>Nama Cabang Pengirim</th>
                                        <th>Nama Pengirim</th>
                                        <th>Nama Penerima</th>                                        
                                        <th>Kota</th>
                                        <th>Alamat</th>
                                        <th>Waktu Penerimaan</th>
                                        <th>Resi Barang</th>
                                        <th className="th-o">Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recuser.map((recuser, index) => (
                                        <tr key={recuser.id_rec_user}>
                                            <td className="serial"><span className="id-column">{index + 1}</span></td>
                                            <td> <span className="name-column">{recuser.id_barang}</span></td>
                                            <td> <span className="name-column">{recuser.nama_barang}</span></td>
                                            <td> <span className="name-column">{recuser.nama_cabang_asal}</span></td>
                                            <td> <span className="name-column">{recuser.nama_pengirim}</span></td>
                                            <td> <span className="name-column">{recuser.nama_penerima}</span> </td>
                                            <td> <span className="name-column">{recuser.kota}</span></td>
                                            <td> <span className="name-column">{recuser.alamat}</span></td>
                                            <td> <span className="name-column">{recuser.waktu_penerimaan}</span> </td>
                                            <td> <span className="name-column">{recuser.resi_barang}</span> </td>
                                            <td>
                                                <a href={`/recuser/edit/${recuser.id_rec_user}`}>
                                                    <span className="badge badge-complete">Edit</span>
                                                </a>
                                                <a href={`/recuser/delete/${recuser.id_rec_user}`} 
                                                    onClick={() => deleteRecuser(recuser.id_rec_user)}>
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

export default AdminTabelRecuser;