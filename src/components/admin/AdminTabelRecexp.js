import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminTabelRecexp(){
    const [recexp, setRecexp] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/recexp')
            .then(res => {
                setRecexp(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteRecexp = async (id_rec_exp) => {
        try{
            await axios.delete(`http://localhost:3010/recexp/delete/${id_rec_exp}`)
        } catch (error){
            alert(error)
        }
    }

    return(
        <div class="orders">
        <div class="row">
            <div class="col-xl-10">
                <div class="card">
                    <div class="card-body">
                        <h4 class="box-title">Penerimaan Ekspedisi</h4>
                    </div>
                    <div class="card-body--">
                        <div class="table-stats order-table ov-h">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th class="serial">#</th>
                                        <th>ID Barang</th>
                                        <th>Nama Cabang Pengirim</th>
                                        <th>ID Admin</th>
                                        <th>Nama Admin</th>                                        
                                        <th>Waktu Penerimaan</th>
                                        <th>Resi</th>
                                        <th>ID Ekspedisi</th>
                                        <th className="th-o">Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recexp.map((recexp, index) => (
                                        <tr key={recexp.id_rec_exp}>
                                            <td class="serial"><span class="id-column">{index + 1}</span></td>
                                            <td> <span class="name-column">{recexp.id_barang}</span></td>
                                            <td> <span class="name-column">{recexp.nama_cabang_sebelum}</span></td>
                                            <td> <span class="name-column">{recexp.id_admin}</span></td>
                                            <td> <span class="name-column">{recexp.nama_admin}</span> </td>
                                            <td> <span class="name-column">{recexp.waktu_penerimaan}</span> </td>
                                            <td> <span class="name-column">{recexp.resi}</span> </td>
                                            <td> <span class="name-column">{recexp.id_ekspedisi}</span> </td>
                                            <td>
                                                <a href={`/recexp/edit/${recexp.id_rec_exp}`}>
                                                    <span className="badge badge-complete">Edit</span>
                                                </a>
                                                <a href={`/recexp/delete/${recexp.id_rec_exp}`} 
                                                    onClick={() => deleteRecexp(recexp.id_rec_exp)}>
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

export default AdminTabelRecexp;


