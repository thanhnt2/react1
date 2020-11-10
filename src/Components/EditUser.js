import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditOject.id,
            name: this.props.userEditOject.name,
            tel: this.props.userEditOject.tel,
            Permission: this.props.userEditOject.Permission,
        }
    }
    
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    luuThongTin = () => {
        var userEdit = {};

        userEdit.id = this.state.id;
        userEdit.name = this.state.name;
        userEdit.tel = this.state.tel;
        userEdit.Permission = this.state.Permission;

        this.props.getUserEditInfo(userEdit);
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="col-12">
                    <form>
                    <div className="card text-white bg-warning mb-3 mt-2">
                        <div className="card-header text-center">Sửa thông tin user</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input 
                                    onChange={(e) => this.isChange(e)}
                                    type="text" 
                                    name="name"  
                                    className="form-control" 
                                    placeholder="Tên user" 
                                    defaultValue={this.props.userEditOject.name}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    onChange={(e) => this.isChange(e)}
                                    type="text" 
                                    name="tel"  
                                    className="form-control" 
                                    placeholder="Điện thoại" 
                                    defaultValue={this.props.userEditOject.tel}
                                />
                            </div>
                            <div className="form-group">
                                <select 
                                    onChange={(e) => this.isChange(e)}
                                    className="custom-select" 
                                    name="Permission" 
                                    defaultValue={this.props.userEditOject.Permission} 
                                    required
                                >
                                    <option value>Chọn quyền mặc định</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Moderator</option>
                                    <option value="3">Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input  type="button"
                                        className="btn btn-block btn-primary" 
                                        value="Cập nhật" 
                                        onClick={() => this.luuThongTin()}/>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
        );
    }
}

export default EditUser;