import React, { Component } from 'react';

class TableDataRow extends Component {
    showPermission = () => {
        if(this.props.permission === 1) { return 'Admin'; }
        else if(this.props.permission === 2) { return 'Moderator'; }
        else return 'Normal User';
    }

    //this.props.editFunClick
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    delUser = (userID) => {
        this.props.delUser(userID);
    }
    render() {
        return (
            <tr>
                        <td>{this.props.stt + 1}</td>
                        <td>{this.props.userName}</td>
                        <td>{this.props.tel}</td> 
                        <td>{this.showPermission()}</td> 
                        <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua" 
                                onClick={()=>this.editClick()}><i className="fa fa-edit" /> Sửa</div>
                            <div 
                                className="btn btn-danger xoa"
                                onClick={(userID) => this.delUser(this.props.id)}
                            >
                                <i className="fa fa-trash" /> Xóa
                            </div>
                        </div>
                        </td> 
                    </tr>
        );
    }
}

export default TableDataRow;