import React, {Component} from 'react';
import LoginPhoto from '../images/login.jpg'
import {Link, Redirect} from 'react-router-dom';
import {signin, authenticate} from '../auth'

class Login extends Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            error:"",
            redirectToReferer: false
        }
    }

    handleChange=(name) =>(event) =>{
        this.setState({error:""});
        this.setState({[name]:event.target.value});
    }

    

    clickSubmit=event =>{
        event.preventDefault();
        const {email, password}= this.state
        const user={email,password}

        signin(user).then(data =>{
            if (data.error) this.setState({error: data.error});
            else {
                    authenticate(data,()=>{
                        setTimeout(this.setState({redirectToReferer:true}), 1000);
                })
            }
        });
    
    }
    render(){ 
        if(this.state.redirectToReferer)
        {
            return <Redirect to="/"/>
        }
        const style={
            width: "400px",
            marginTop:"10px",
            boxShadow: "0 0",
            padding: "10px 20px 20px 10px",
            border: "darkgray solid 1px",
        
        }
         return(
            <div style={{backgroundColor: "white", marginTop: "50px", marginBottom:"150px"}}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={LoginPhoto} style={{height:" 400px"}} />
                    </div>
                    <div className="col-md-6">
                        <center>
                            <h1><strong>Login</strong></h1>
                            <form >
                                <div style={{border: "black solid 1px" ,width: "max-content", marginTop: "50px", padding: "50px 50px 50px 50px"}}>
                                    <input onChange={this.handleChange("email")}  style={style} placeholder="Registered Email Id" /><br/>
                                    <input onChange={this.handleChange("password")} type="password" style={style} placeholder="Enter Password" /><br/><br/><br/>
                                    <button onClick={this.clickSubmit} className="btn btn-primary btn-raised" style={{backgroundColor: "black"}}>Login</button>
                                </div>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login