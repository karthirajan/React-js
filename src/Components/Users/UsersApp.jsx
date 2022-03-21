import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UsersListComponent from './UsersListComponent';
import ErrorComponent from './ErrorComponent';
import withParams from './withParams';
import withNavigation from './withNavigation';
import HeaderComponent from './HeaderComponent';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import UserUpdateComponent from './UserUpdateComponent';

class UserApp extends Component {
    render() {
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const HeaderComponentWithParams = withNavigation(HeaderComponent);
        const UserListComponentWithNav = withNavigation(UsersListComponent);
        const UserUpdateComponentWithParams = withNavigation(withParams(UserUpdateComponent));
        const LogoutComponentWithNavigation = withNavigation(LogoutComponent);
        return (
            <div>
                <Router>
                    <HeaderComponentWithParams />
                    <Routes>
                        <Route path='/' element={<LoginComponentWithNavigation />} />
                        <Route path='/login' element={<LoginComponentWithNavigation />} />
                        <Route path='/welcome/:name' element={
                            <AuthenticatedRoute>
                                <WelcomeComponentWithParams />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/users' element={
                            <AuthenticatedRoute>
                                <UserListComponentWithNav />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponentWithNavigation />
                            </AuthenticatedRoute>
                        } />
                        <Route path='*' element={<ErrorComponent />} />
                        <Route path='/users/karthi/:id' element={
                             <AuthenticatedRoute>
                                <UserUpdateComponentWithParams />
                            </AuthenticatedRoute>} />
                    </Routes>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

export default UserApp;