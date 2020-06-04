import React from 'react';
import logo from '../images/logo.png';
import {animateScroll as scroll } from "react-scroll";
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth'

const Menu = ({history}) => (
    <div >
        <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "white", boxShadow: " 0 0 ", padding: "10px 100px 10px 100px"}}>
            <a className="navbar-brand lead" style={{fontSize:"2rem"}}><img src={logo} style={{height: "40px"}}/><strong>   PretVA</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" >Making Fashion Easy</a>
                    </li>
                </ul>
                <span className="lead" style={{fontSize: "15px"}}>
                    <Link to="/" onClick={(()=> scroll.scrollTo(600))} style={{color: "black"}}>About Us</Link> 
                    <Link to="/" onClick={(()=> scroll.scrollTo(1400))} style={{color: "black", marginLeft: "25px"}}>Services</Link> 
                    <Link to="/" onClick={(()=> scroll.scrollTo(1400))} style={{color: "black", marginLeft: "25px"}}>Buyers</Link> 
                    <Link to="/" onClick={(()=> scroll.scrollTo(3050))} style={{color: "black", marginLeft: "25px"}}>Suppliers</Link> 
                    <Link style={{color: "black", marginLeft: "25px"}}>Pricing</Link> 
                    <Link style={{color: "black", marginLeft: "25px"}}><i class="fab fa-facebook-f"></i></Link>
                    <Link style={{color: "black", marginLeft: "25px"}}><i class="fab fa-instagram"></i></Link>
                    <Link style={{color: "black", marginLeft: "25px"}}><i class="fab fa-linkedin-in"></i></Link>
                    { !isAuthenticated() && <>
                        <Link to="/login" className="btn btn-primary btn-raised" style={{marginLeft: "25px", borderColor: "black", backgroundColor:"white", color:"black", border:" solid 1px", boxShadow:"0 0"}}>Login</Link>
                        <Link to="/" onClick={(()=> scroll.scrollTo(4700))} className="btn btn-primary btn-raised" style={{marginLeft: "25px", backgroundColor: "black", boxShadow:"0 0"}}>Register</Link>
                    </>}
                    { isAuthenticated() && <>
                        <Link to="/login" className="btn btn-primary btn-raised" style={{marginLeft: "25px", borderColor: "black", backgroundColor:"white", color:"black", border:" solid 1px", boxShadow:"0 0"}}>View Profile</Link>
                        <button to="/" onClick={()=>signout(() => history.push("/"))} className="btn btn-primary btn-raised" style={{marginLeft: "25px", backgroundColor: "black", boxShadow:"0 0"}}>Signout</button>

                    </>}
                </span>
            </div>
        </nav>
    </div>
   
)


export default withRouter(Menu);