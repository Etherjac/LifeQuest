import Header from "../components/Header";
import {Link} from "react-router-dom"
import QuestForm from "./questForm";

export default function IndexPage (){
    return(
        <>
        
        <Header/>
        <QuestForm/>
        {/* <button>Register</button>
        <button>Login</button> */}
        
        </>
    )
}