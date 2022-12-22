import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SAFormCabang(){
    const [nama, setNama] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const saveCabang = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3010/cabang', {
            id_cabang: id,
            nama_cabang: nama,
            lokasi: lokasi
        });
        navigate("/cabang");
    }


    return(
        <div className="col-lg-6" style={{margin:'10px 10px'}}>
            <a href="/cabang">
                    <button type="button" class="btn btn-primary fa fa-arrow-circle-left" >  Kembali</button>
                </a>
                    <form className="form-horizontal" onSubmit={saveCabang}>
                    <div className="card" style={{marginTop:'10px'}}>
                        <div className="card-header"><strong>Form Cabang</strong></div>
                        <div className="card-body card-block">
                            <div className="form-group">
                                <label for="company" className=" form-control-label">
                                    ID Cabang
                                </label>
                            <input type="text" id="id_cabang" name="id_cabang" placeholder="Enter Cabang ID" className="form-control" onChange={(e) => setId(e.target.value)} value={id}/>                                
                            
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
                            <button type="submit" className="btn btn-primary" style={{margin:'10px 10px'}}>Simpan</button>
                        </div>
                    </div>
                    </form>
            </div>
    )
}

export default SAFormCabang;

