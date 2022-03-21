import React,{Component} from 'react';
import UserService from '../API/UserService';
import Authentication from './Authentication';
import moment from 'moment';


class UsersListComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            usersList: [],
            deletedUser: ''
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.userUpdate = this.userUpdate.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    addUser(){
        this.props.navigate(`/users/karthi/-1`);
    }

    userUpdate(id){
        this.props.navigate(`/users/karthi/${id}`);
    }

    deleteUser(name,id){
        UserService.deleteUserById(name,id)
        .then((response) => {
            console.log(name+":"+id)
            this.setState({deletedUser: name})
            this.refreshData();
        })
    }

    refreshData=()=>{
        UserService.retriveUserDatas()
        .then((response) => {
            this.setState({usersList: response.data})
        })
    }

    componentDidMount(){
       this.refreshData();
    }

   render(){
       return(
           <div className='welcome'>
               <div className='container'>
                   <div className="row mt-5 justify-content-center">
                       <h4>Users List</h4>
                       {this.state.deletedUser && <div className='alert alert-danger'>you have deleted {this.state.deletedUser}</div>}
                       <table className='table table-hover table-striped'>
                           <thead>
                               <tr>
                                   <th>ID</th>
                                   <th>Name</th>
                                   <th>Designation</th>
                                   <th>DOJ</th>
                                   <th>Status</th>
                                   <th>Edit</th>
                                   <th>Delete</th>
                               </tr>
                           </thead>
                           <tbody>
                               {this.state.usersList.map(
                                   users =>
                                   <tr key={users.id}>
                                       <td>{users.id}</td>
                                       <td>{users.name}</td>
                                       <td>{users.designation}</td>
                                       <td>{moment(users.date).format('YYYY-MM-DD')}</td>
                                       <td>{users.status.toString()}</td>
                                       <td><button className='btn btn-warning btn-sm' onClick={() => this.userUpdate(users.id)}>Edit</button></td>
                                       <td><button className='btn btn-danger btn-sm' onClick={() => this.deleteUser(users.name,users.id)}>Delete</button></td>
                                   </tr>
                               )}
                           </tbody>
                       </table>
                       <div className="mt-3">
                           <button className='btn btn-success' onClick={this.addUser}>Add User</button>
                       </div>
                   </div>
               </div>
           </div>
       )
   }
}

export default UsersListComponent;