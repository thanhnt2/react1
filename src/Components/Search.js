import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
constructor(props) {
    super(props);
    this.state = {
        tempValue: '',
        userObj: {},
    }
}
    getUserEditInfo = (userInfo) => {
        this.setState({
            userObj: userInfo,
        });
        this.props.getUserEditInfoForApp(userInfo);
    }

    isChange = (e) => {
        console.log(e.target.value);
        this.setState({
            tempValue: e.target.value
        });
    }

    hienThiNut = () => {
        if(this.props.hienThi === false){
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}> Thêm mới </div>;
        }
        else{
            return  <div className="btn btn-block btn-outline-primary"  onClick={() => this.props.ketNoi()}> Đóng lại </div>;
        }
    }

    isShowEditForm = () => {
        if(this.props.showEditForm === true){
            return <EditUser 
                        getUserEditInfo={(userInfo) => this.getUserEditInfo(userInfo)}
                        changeEditUserStatus={()=> this.props.changeEditUserStatus()}
                        userEditOject={this.props.userEditOject}
                    />
        }
    }

    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(e) => this.isChange(e)} type="text" className="form-control" placeholder="Nhập từ khóa tìm kiếm" />
                        <div className="btn btn-info" onClick={(dl) => this.props.searchOK(this.state.tempValue)}>Tìm</div>
                    </div>
                    
                   {this.hienThiNut()}   
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;