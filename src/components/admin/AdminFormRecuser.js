import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminFormRecuser(){
    const [idbarang, setIdBarang] = useState('');
    const [namabarang, setNamaBarang] = useState('');
    const [namacabangasal, setNamaCabangAsal] = useState('');
    const [namapengirim, setNamaPengirim] = useState('');
    const [namapenerima, setNamaPenerima] = useState('');
    const [kota, setKota] = useState('');
    const [alamat, setAlamat] = useState('');
    const [waktupenerimaan, setWaktuPenerimaan] = useState('');
    const [resibarang, setResiBarang] = useState('');
    const navigate = useNavigate();

    const saveRecuser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3010/recuser', {
            id_barang: idbarang,
            nama_barang:namabarang,
            nama_cabang_asal:namacabangasal,
            nama_pengirim:namapengirim,
            nama_penerima:namapenerima,
            kota: kota,
            alamat:alamat,
            waktu_penerimaan: waktupenerimaan,
            resi_barang:resibarang
        });
        navigate("/recuser");
    }


    return(
        <div className="content">
            <div className="animated fadeIn">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            Penerimaan Barang dari <strong>User</strong>
                        </div>
                        <div className="card-body card-block">
                            <form className="form-horizontal" onSubmit={saveRecuser}>
                                <div className="row form-group">
                                    <div className="col col-md-3"><label for="text-input" className=" form-control-label">ID Barang</label></div>
                                    <div className="col-12 col-md-9">
                                        <input type="number" id="id-barang-input" name="id_barang_input" placeholder="Tuliskan ID Barang" className="form-control" onChange={(e) => setIdBarang(e.target.value)} value={idbarang}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3"><label for="text-input" className=" form-control-label">Nama Barang</label></div>
                                    <div className="col-12 col-md-9">
                                        <input type="text" id="nama-barang-input" name="nama_barang_input" placeholder="Tuliskan Nama Barang" className="form-control" onChange={(e) => setNamaBarang(e.target.value)} value={namabarang}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3"><label for="text-input" className=" form-control-label">Nama Cabang asal</label></div>
                                    <div className="col-12 col-md-9">
                                        <input type="text" id="cabang-asal-input" name="cabang_asal_input" placeholder="Tuliskan Nama Cabang Asal" className="form-control" onChange={(e) => setNamaCabangAsal(e.target.value)} value={namacabangasal}/>                                            
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3"><label for="text-input" className=" form-control-label">Nama Pengirim</label></div>
                                    <div className="col-12 col-md-9">
                                        <input type="text" id="nama-pengirim-input" name="nama_pengirim_input" placeholder="Tuliskan Nama Pengirim" className="form-control" onChange={(e) => setNamaPengirim(e.target.value)} value={namapengirim}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3"><label for="text-input" className=" form-control-label">Nama Penerima</label></div>
                                    <div className="col-12 col-md-9">
                                        <input type="text" id="nama-penerima-input" name="nama_penerima_input" placeholder="Tuliskan Nama Penerima" className="form-control" onChange={(e) => setNamaPenerima(e.target.value)} value={namapenerima}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3"><label for="text-input" className=" form-control-label">Kota</label></div>
                                    <div className="col-12 col-md-9">
                                        <input type="text" id="kota-input" name="kota_input" placeholder="Tuliskan Kota" className="form-control"onChange={(e) => setKota(e.target.value)} value={kota}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3"><label for="text-input" className=" form-control-label">Alamat</label></div>
                                    <div className="col-12 col-md-9">
                                        <input type="text" id="alamat-input" name="alamat_input" placeholder="Tuliskan Alamat" className="form-control" onChange={(e) => setAlamat(e.target.value)} value={alamat}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3"><label for="text-input" className=" form-control-label">Waktu Penerimaan</label></div>
                                    <div className="col-12 col-md-9">
                                        <input type="text" id="waktu-penerima-user-input" name="waktu_penerima_user_input" placeholder="Tuliskan Waktu Penerimaan" className="form-control" onChange={(e) => setWaktuPenerimaan(e.target.value)} value={waktupenerimaan}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3"><label for="text-input" className=" form-control-label">Resi Barang</label></div>
                                    <div className="col-12 col-md-9">
                                        <input type="text" id="resi-input" name="resi_input" placeholder="Tuliskan Resi" className="form-control" onChange={(e) => setResiBarang(e.target.value)} value={resibarang}/>
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

export default AdminFormRecuser;

