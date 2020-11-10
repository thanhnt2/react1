import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua: false
        }
    }

    thayDoiTrangThai = () => {
        this.setState({
            trangThaiChinhSua: !this.state.trangThaiChinhSua
        });
    }

    hienThiNut = () =>{
        if(this.state.trangThaiChinhSua === true){
            return <div className="btn btn-block btn-outline-secondary" onClick={()=> this.thayDoiTrangThai()}> Đóng lại </div>;
        }
        else{
            return <div className="btn btn-block btn-outline-primary" onClick={()=>this.thayDoiTrangThai()}> Thêm mới </div>;
        }
    }

    hienThiFrom = () => {
        if(this.state.trangThaiChinhSua === true){
            return (
                <div className="card border-primary mb-3 mt-2">
                    <div className="card-header">Thêm mới user vào hệ thống</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" required>
                                <option value>Chọn quyền mặc định</option>
                                <option value="{1}">Admin</option>
                                <option value="{2}">Moderator</option>
                                <option value="{3}">Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-block btn-primary">Thêm mới</div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div className="col-3">
                
                {this.hienThiNut()}
                {this.hienThiFrom()}
                
            </div>
        );
    }
}

export default AddUser;