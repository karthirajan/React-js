import React,{Component} from 'react';
import './style.css'
import '../../Bootstrap.css'

class ListComponent extends Component{

   constructor(props){
     super(props);
     this.state = {
            userDetails : [ 
                            {id:1,name:'karthi',designation:'developer'},
                            {id:2,name:'sabari',designation:'developer'},
                            {id:3,name:'satyan',designation:'developer'}
                        ]
     }
   }


    render(){
      return( 
          <React.Fragment>
          <h1>Tables</h1>            
        <div className='container'>
            <table className='table table-stribed table-hover'>
                <thead>
                    <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.userDetails.map(
                        users => 
                        <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.designation}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div> 
        </React.Fragment>      
      )
    }
}


export default ListComponent;
  

  