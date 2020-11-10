import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    delUser = (userID) => {
        this.props.xoaUserByID(userID);
    }
    mappingDataUser = () => this.props.dataUserProps.map((value, index) => (
       
            <TableDataRow 
              key={index} 
              delUser={(userID) => this.delUser(userID)}
              editFunClick={(user) => this.props.editFun(value)} 
              stt={index}
              id={value.id} 
              userName={value.name} 
              tel={value.tel} 
              permission={value.Permission}
              changeEditUserStatus={()=>this.props.changeEditUserStatus()}
            />
        ));
    
    //this.props.editFun

    render() {
        // console.log(this.props.dataUserProps);
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.mappingDataUser()}
                    
                    </tbody>
                </table>
                </div>

        );
    }
}

export default TableData;