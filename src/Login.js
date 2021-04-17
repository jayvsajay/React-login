import React , { Component } from "react";
import fire from "./config/fire";
import './Login.scss';

class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        alert("Enter valid emailid and password")
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        alert("Enter valid emailid")
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(
        <div className="base-container">
           <div className="header">Login and Signup</div>
           <div className="content">
               <div className="image">
               <img src="jay.jpg" alt="logo"/>
               </div> 
            <div className="form">
            <div className="form-group">
        
              <label htmlFor="Email">Enter email</label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                class="form-control"
                />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Enter password</label>
                <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                class="form-control"
                />
                </div>
                </div>
                </div>
                <div className="footer">
                <button type="button" className="btn-success" onClick={this.login} backgroundcolor="success">Login</button>
                <button type="button" className="btn-primary" onClick={this.signup} backgroundcolor="success">Signup</button>
                </div>
                
            </div>
            
           

    )
}
}
export default Login;