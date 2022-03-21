import { ErrorMessage, Field, Form, Formik } from "formik";
import React,{Component} from "react";
import moment from "moment";
import UserService from "../API/UserService";
import Authentication from "./Authentication";

class UserUpdateComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
             id: this.props.params.id,
             name: '',
             designation: '',
             date: new Date().toString(),
             status: false
        }
        this.submit = this.submit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount(){
        let user = Authentication.getLoggedUser();
        UserService.findUserById(user,this.state.id)
        .then((response) => {
            this.setState({
                name: response.data.name,
                designation: response.data.designation,
                date: moment(response.data.date).format('YYYY-MM-DD'),
                status: response.data.status
            })
        })
    }

    validate(values){
        console.log(values + "from validate")
        let error = {}
        if(!values.designation){
            error.designation = "Enter designation"
        }else if(values.designation.length < 5){
            error.designation = "Length shoul be more than 5 characters"
        }

        return error;
    }

    submit(values){
       console.log(values + "from submit")
       let username = Authentication.getLoggedUser();
       let user = {
           id: values.id,
           name: values.name,
           designation: values.designation,
           date: values.date,
           status: values.status
       }

       if(this.state.id !== -1 || this.state.id !== 0){
       UserService.updateUserById(username,this.state.id,user)
       .then((response) => this.props.navigate(`/users`))
       }else if(this.state.id === -1 || this.state.id === 0){
        UserService.createUserById(username,user)
        .then((response) => this.props.navigate(`/users`))
       }
    }

    render(){
        let {id,name,designation,date,status} = this.state
        return(
            <div className="container">
            <div>User Update </div>
            <div className="row mt-3 justify-content-center">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">

                        <Formik
                           initialValues={{id,name,designation,date,status}}
                           enableReinitialize
                           onSubmit = {this.submit}
                           validate = {this.validate}
                           validateOnChange ={false}
                        >

                            {(props) => 
                            <Form>
                                <ErrorMessage component='div' name="designation" className="alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group mt-3">
                                   <Field className="form form-control form-control-sm" type="text" name="id"></Field>
                                </fieldset>
                                <fieldset className="form-group mt-3">
                                   <Field className="form form-control form-control-sm" type="text" name="name"></Field>
                                </fieldset>
                                <fieldset className="form-group mt-3">
                                   <Field className="form form-control form-control-sm" type="text" name="designation"></Field>
                                </fieldset>
                                <fieldset className="form-group mt-3">
                                   <Field className="form form-control form-control-sm" type="text" name="date"></Field>
                                </fieldset>
                                <fieldset className="form-group mt-3">
                                   <Field className="form form-control form-control-sm" type="text" name="status"></Field>
                                </fieldset>
                                <div className="row mt-3">
                                    <button type="submit" className="btn btn-success btn-sm">Save Changes</button>
                                </div>
                            </Form>
                            }
                        </Formik>


                            {/*<div className="row mt-3">
                                <input className="form form-control form-control-sm" name="id" value={this.state.id}></input>
                            </div>
                            <div className="row mt-3">
                                <input className="form form-control form-control-sm" name="username" value={this.state.username}></input>
                            </div>
                            <div className="row mt-3">
                                <input className="form form-control form-control-sm" name="designation" value={this.state.designation}></input>
                            </div>
                            <div className="row mt-3">
                                <input className="form form-control form-control-sm" name="date" value={this.state.date}></input>
                            </div>
                            <div className="row mt-3">
                                <input className="form form-control form-control-sm" name="status" value={this.state.status}></input>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
            </div>

        )
    }

}

export default UserUpdateComponent;