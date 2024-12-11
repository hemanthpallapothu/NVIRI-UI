import { Component } from "react";
import './index.css';

class Login extends Component {
    componentDidMount() {
        this.getAPI();
    }

    getAPI = async () => {
        const apiUrl = "https://nviri-m7qhls4y7-hemanth-pallapothus-projects.vercel.app/users";
        const resoponse=await fetch(apiUrl)
        const jsonData=await resoponse.json()
        console.log(jsonData)
    };

    render() {
        return <h1>Hello World !</h1>;
    }
}

export default Login;