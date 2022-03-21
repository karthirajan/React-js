import axios from "axios";

class Authentication{

    executeJWTAuthService(username, password){
        return axios.post(`http://localhost:8080/authenticate`,{username,password});
    }

    executeBasicAuthService(username, password){
        return axios.get(`http://localhost:8080/basicAuth`,
        {headers: {authorization: this.createBasicAuth(username , password)}}
        )
    }

    createBasicAuth(username , password){
        return 'Basic ' + window.btoa(username+':'+password);
    }

    createJWTAuth(token){
        return 'Bearer ' + token;
    }

    storeJWTRegisteredUser(username , token){
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors(token);
    }


    storeRegisteredUser(username , password){
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors(username,password);
    }

    isUserLoggedIn(){
       let user = sessionStorage.getItem('authenticatedUser');
       if(user === null){
           return false;
       }else{
           return true;
       }
    }

    getLoggedUser(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null){
            return null;
        }else{
            return user;
        }
     }

    removeRegisteredUser(){
        sessionStorage.removeItem('authenticatedUser');
    }


    setupAxiosInterceptors(token){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = this.createJWTAuth(token);
                }
                return config;
            }
        )
    }

}

export default new Authentication();