import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminEditRecexp(){
    const [idbarang, setIdBarang] = useState('');
    const [namacabangsebelum, setNamaCabangSebelum] = useState('');
    const [idadmin, setIdAdmin] = useState('');
    const [namaadmin, setNamaAdmin] = useState('');    
    const [waktupenerimaan, setWaktuPenerimaan] = useState('');
    const [resi, setResi] = useState('');
    const [idekspedisi, setIdEkspedisi] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        try{
            axios.get(`http://localhost:3010/recexp/${id}`).then((res) => {
            setIdBarang(res.data.id_barang);
            setNamaCabangSebelum(res.data.nama_cabang_sebelum);
            setIdAdmin(res.data.id_admin);
            setNamaAdmin(res.data.nama_admin);
            setWaktuPenerimaan(res.data.waktu_penerimaan);
            setResi(res.data.resi);
            setIdEkspedisi(res.data.id_ekspedisi);
        });
        } catch (error){
            alert(error)
        }
    }, [id]);

    const data = {
        id_barang: idbarang,
        nama_cabang_sebelum:namacabangsebelum,
        id_admin:idadmin,
        nama_admin:namaadmin,
        waktu_penerimaan: waktupenerimaan,
        resi:resi,
        id_ekspedisi:idekspedisi
};

    function UpdateRecexp(e) {
        e.preventDefault();
        try{axios.put(`http://localhost:3010/recexp/${id}`, data).then(navigate("/recexp"));}
        catch (error){
            alert(error)
        }
    }


    return(
        <div className="content">
            <div className="animated fadeIn">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            Penerimaan Barang dari <strong>Ekspedisi</strong>
                        </div>
                        <div className="card-body card-block">
                            <form className="form-horizontal" onSubmit={UpdateRecexp}>
                                <div className="row form-group">
                                    <div className="col col-md-3"><label for="text-input" className=" form-control-label">ID Barang</label></div>
                                    <div className="col-12 col-md-9">
                                        <input type="number" id="id-barang-input" name="id_barang_input" placeholder="Tuliskan ID Barang" className="form-control" onChange={(e) => setIdBarang(e.target.value)} value={idbarang}/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input" class=" form-control-label">Nama Cabang Asal</label></div>
                                    <div class="col-12 col-md-9">
                                        <input type="text" id="nama-cabang-input" name="nama_cabang_input" placeholder="Tuliskan Nama Cabang" class="form-control" onChange={(e) => setNamaCabangSebelum(e.target.value)} value={namacabangsebelum}/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Admin</label></div>
                                    <div class="col-12 col-md-9">
                                        <input type="number" id="id-admin-input" name="id_admin_input" placeholder="Tuliskan ID Admin" class="form-control" onChange={(e) => setIdAdmin(e.target.value)} value={idadmn}/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input" class=" form-control-label">Nama Admin</label></div>
                                    <div class="col-12 col-md-9">
                                        <input type="text" id="nama-admin-input" name="nama_admin_input" placeholder="Tuliskan Nama Admin" class="form-control" onChange={(e) => setNamaAdmin(e.target.value)} value={namaadmin}/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input" class=" form-control-label">Waktu Penerimaan</label></div>
                                    <div class="col-12 col-md-9">
                                        <input type="text" id="waktu-penerimaan-input" name="waktu_penerimaan_input" placeholder="Tuliskan Waktu Penerimaan" class="form-control" onChange={(e) => setWaktuPenerimaan(e.target.value)} value={waktupenerimaan}/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input" class=" form-control-label">Resi Barang</label></div>
                                    <div class="col-12 col-md-9">
                                        <input type="text" id="resi-input" name="resi_input" placeholder="Tuliskan Resi" class="form-control" onChange={(e) => setResi(e.target.value)} value={resi}/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Ekspedisi</label></div>
                                    <div class="col-12 col-md-9">
                                        <input type="number" id="id-ekspedisi-input" name="id_ekspedisi_input" placeholder="Tuliskan ID Ekspedisi" class="form-control" onChange={(e) => setIdEkspedisi(e.target.value)} value={idekspedisi}/>
                                    </div>
                                </div>
                                            
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary btn-sm">
                                        <i className="fa fa-dot-circle-o"></i> Submit
                                    </button>
                                    <button type="reset" className="btn btn-danger btn-sm">
                                        <i className="fa fa-ban"></i> Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AdminEditRecexp;

