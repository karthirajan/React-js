import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Authentication from './Authentication';
import './users.css'


class HeaderComponent extends Component {

    
    render() {
        const user = Authentication.isUserLoggedIn();
        const userName = Authentication.getLoggedUser();
        console.log('render');
        return (            
            <div className='welcome'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">USERS APP</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        {user && <Link className="nav-link active" to={`/welcome/${userName}`}>Welcome</Link>}
                                    </li>
                                    <li className="nav-item">
                                        {user && <Link className="nav-link" to="/users">Users Datas</Link>}
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    {!user && <button className="btn btn-success"><Link to="/" style={{textDecoration:'none',color:'white'}}>Login</Link></button>}
                                    {user && <button className="btn btn-warning logout"><Link to="/logout" style={{textDecoration:'none',color:'white'}}>Logout</Link></button>}
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;