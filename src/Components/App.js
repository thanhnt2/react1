
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditOject: {},
    }
  }
  componentDidMount() {
    if(localStorage.getItem("userData") === null){
      localStorage.setItem("userData", JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp,
      });
    }
   
  }
  

  xoaUserByID = (userID) => {
    var tempData = this.state.data.filter(item => item.id !== userID);
    this.setState({
      data: tempData,
    });

    localStorage.setItem("userData", JSON.stringify(this.state.data));
  }

  getUserEditInfo = (info) => {
    console.log('App đã nhận được: ' + info);
    this.state.data.forEach((value, index) => {
        if(value.id === info.id){
          value.name = info.name;
          value.tel = info.tel;
          value.Permission = info.Permission;
        }
    });
     localStorage.setItem("userData", JSON.stringify(this.state.data));
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm:!this.state.hienThiForm
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
    console.log("Kết nối thành công " + this.state.searchText);
  }

  editUser = (user) => {
    this.setState({
      userEditOject: user,
    });
  }

  getNewUserData = (name, tel, Permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    

    var items = this.state.data;

    items.push(item);

    this.setState({
      data: items,
    });

    localStorage.setItem("userData", JSON.stringify(items));
  }

  render() {
    //localStorage.setItem("userData",JSON.stringify(DataUser));
   
    var ketqua = [];

    this.state.data.forEach((item) => {
        if(item.name.indexOf(this.state.searchText) !==  -1) {
            ketqua.push(item);
        };
    })

    return (
      <div>  
      <Header/>
      <div className="searchForm">
         <div className="container">
           <div className="row">
             <Search 
               getUserEditInfoForApp = {(info) => this.getUserEditInfo(info) }
               userEditOject={this.state.userEditOject}
               searchOK={(dl) => this.getTextSearch(dl)} 
               ketNoi={() => this.doiTrangThai()} 
               hienThi={this.state.hienThiForm}
               showEditForm={this.state.editUserStatus}
               changeEditUserStatus={()=>this.changeEditUserStatus()}
             />
             <TableData 
               xoaUserByID={(userID) => this.xoaUserByID(userID)}
               editFun={(user)=>this.editUser(user)} 
               changeEditUserStatus={()=>this.changeEditUserStatus()}
               dataUserProps={ketqua}
             />
             <AddUser hienThi={this.state.hienThiForm} add={(name, tel, Permission) => this.getNewUserData(name, tel, Permission)}/>
           </div>
         </div>
      </div>
     </div>
    );
  }
}

export default App;
