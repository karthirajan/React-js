import { useNavigate } from "react-router-dom";
import LoginComponent from "./LoginComponent";

function withNavigation(Component){
    return props => <Component {...props} navigate={useNavigate()}/>

}

export default withNavigation;