import axios from "axios";

class UserService{

    retriveUserDatas(){

        return axios.get(`http://localhost:8080/jpa/users`);

    }

    deleteUserById(username,id){
        return axios.delete(`http://localhost:8080/jpa/users/${username}/${id}`);
    }


    findUserById(username,id){
        return axios.get(`http://localhost:8080/jpa/users/${username}/${id}`);
    }

    updateUserById(username,id,user){
        return axios.put(`http://localhost:8080/jpa/users/${username}/${id}`,user);
    }

    createUserById(username,user){
        return axios.post(`http://localhost:8080/jpa/users/${username}`,user);
    }

}

export default new UserService();