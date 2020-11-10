import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            Permission: "",
        }
    }
    
  
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name);
        // console.log(value);
        
        this.setState({
            [name]: value,
        });

        //package to item
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.Permission = this.state.Permission;

        // console.log(item);

    }

    hienThiFrom = () => {
        if(this.props.hienThi === true){
            return (
                
                <div className="col">
                    <form>
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Thêm mới user vào hệ thống</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" name="name" onChange={(e) => this.isChange(e)} className="form-control" placeholder="Tên user" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="tel" onChange={(e) => this.isChange(e)} className="form-control" placeholder="Điện thoại" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select" name="Permission" onChange={(e) => this.isChange(e)} required>
                                    <option value>Chọn quyền mặc định</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Moderator</option>
                                    <option value="3">Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input  type="reset"
                                        className="btn btn-block btn-primary" 
                                        onClick={(name, tel, Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} 
                                        value="Thêm mới" />
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div>
                {this.hienThiFrom()}
            </div>
            
        );
    }
}

export default AddUser;