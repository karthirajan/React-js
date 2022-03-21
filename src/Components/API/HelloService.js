import axios from "axios";

class HelloService{

    retriveMessage(){
       
        return axios.get(`http://localhost:8080/hello-world-bean`
        );

    }

    retriveMessagewithPath(username){

        return axios.get(`http://localhost:8080/hello-world-bean/${username}`);

    }

    retriveMessagewithError(){

        return axios.get(`http://localhost:8080/hello-world-bean/users`);

    }

}

export default new HelloService();