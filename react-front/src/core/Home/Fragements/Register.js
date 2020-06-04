import React, {Component} from 'react';
import reg from './images/register.jpg';
import {signup, authenticate} from '/Users/macbookpro/Documents/internship-pretva/react-front/src/auth'


class Register extends Component{
    constructor(){
        super()
        this.state={
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            type:"",
            cname:"",
            city:"",
            address:"",
            cwebsite:"",
            contact:"",
            error:"",
        }
    }

    handleChange=(name) =>(event) =>{
        this.setState({error:""});
        this.setState({[name]:event.target.value});
    }



    clickSubmit=event =>{
        event.preventDefault();
        const {firstname,lastname,email,password,type,cname,city,address, cwebsite,contact}= this.state
        const user={firstname,lastname,email,password,type,cname,city,address, cwebsite,contact}

        signup(user).then(data =>{
            console.log("attempting..")
            if (data.error) this.setState({error: data.error});
            else {
                    authenticate(data,()=>{
                        console.log('Logged In')
                })
            }
        });
    
    }

    render(){
        const style={
            border: " black solid 2px",
            background: "none",
            boxShadow: "0 0",
            width: "450px",
            height: "60px",
            padding: "10px 10px 10px 10px",
            marginTop: "10px",
        }
        const {error}=this.state
         return(
            <div >
                <img src={reg} style={{height: "1050px", objectFit: "cover"}} />
                <div style={{ marginTop:"-1000px"}}>
                    <h1 style={{fontFamily:"sans-serif", fontSize: "4rem",marginLeft: "50px"}}><strong>Register for free <br/>to avail our services</strong></h1>
                    <div style={{marginTop: "50px", marginLeft: "50px"}}>
                    <form>
                        <div className="alert alert-danger" style={{display: error ? "" :"none"}}>{error}</div>
                        <input onChange={this.handleChange("firstname")}  style={style} placeholder="Enter Your First Name *"/><br/>
                        <input onChange={this.handleChange("lastname")} style={style} placeholder="Enter Your Last Name *"/><br/>
                        <input onChange={this.handleChange("type")} style={style} placeholder="Are you a Buyer or a Seller? *"/><br/>
                        <input onChange={this.handleChange("cname")} style={style} placeholder="Enter Your Company Name *"/><br/>
                        <input onChange={this.handleChange("city")} style={style} placeholder="Enter Your Company City *"/><br/>
                        <input onChange={this.handleChange("address")} style={style} placeholder="Enter Your Company's Address *"/><br/>
                        <input onChange={this.handleChange("cwebsite")} style={style} placeholder="Company's Website (Optional)"/><br/>
                        <input onChange={this.handleChange("contact")} style={style} placeholder="Contact Number *"/><br/>
                        <input onChange={this.handleChange("email")} style={style} placeholder="Email Id *"/><br/>
                        <input onChange={this.handleChange("password")} style={style} placeholder="Choose Password *"/><br/><br/>
                        <button onClick={this.clickSubmit} className="btn btn-primary btn-raised btn-dark" style={{width:"250px"}}>Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register ;