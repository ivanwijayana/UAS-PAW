import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function SAEditCabang(){
    const [nama, setNama] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [idcabang, setIdCabang] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        try{
            axios.get(`http://localhost:3010/cabang/${id}`).then((res) => {
            setIdCabang(res.data.id_cabang);
            setNama(res.data.nama_cabang);
            setLokasi(res.data.lokasi);
        });
        } catch (error){
            alert(error)
        }
    }, [id]);

    const data = {
        id_cabang: idcabang,
        nama_cabang: nama,
        lokasi: lokasi
    };

    function UpdateCabang(e) {
        e.preventDefault();
        try{axios.put(`http://localhost:3010/cabang/${id}`, data).then(navigate("/cabang"));}
        catch (error){
            alert(error)
        }
    }


    return(
        <div className="col-lg-6">
                    <form className="form-horizontal" onSubmit={UpdateCabang}>
                    <div className="card">
                        <div className="card-header"><strong>Form Cabang</strong></div>
                        <div className="card-body card-block">
                            <div className="form-group">
                                <label for="company" className=" form-control-label">
                                    ID Cabang
                                </label>
                            <input type="text" id="id_cabang" name="id_cabang" placeholder="Enter Cabang ID" className="form-control" onChange={(e) => setIdCabang(e.target.value)} value={idcabang}/>                                
                            
                            <label for="vat" className=" form-control-label">
                                Nama Cabang
                            </label>
                            <input type="text" id="nama_cabang" name="nama_cabang" placeholder="Enter Cabang Name" className="form-control" onChange={(e) => setNama(e.target.value)} value={nama}/>
                            
                            <label for="street" className=" form-control-label">
                                Lokasi Cabang
                            </label>
                            <input type="text" id="lokasi" name="lokasi" placeholder="Enter Cabang Location" className="form-control" onChange={(e) => setLokasi(e.target.value)} value={lokasi}/>
                            </div>
                        </div>
                        <div className="but">
                            <button type="submit" className="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                    </form>
            </div>
    )
}

export default SAEditCabang;

