import React, {Component} from 'react';

class Footer extends Component{
    render(){
         return(
            <div>
                <div style={{backgroundColor: "black",color: "white", padding: "30px 30px 30px 30px"}}>
                    <div className="container" >
                        <div className="row">
                        <div className="col-md-3"><strong style={{fontSize:"35px"}}>PretVa</strong><br/><br/><br/></div>
                        <div className="col-md-3">Address</div>
                        <div className="col-md-3">Contact</div>
                        <div className="col-md-3">Follow</div>
                        </div>
                        <div className="row" style={{marginTop: "-60px"}}>
                        <div className="col-md-3"></div>
                        <div className="col-md-3">Bengaluru, Karnataka, India</div>
                        <div className="col-md-3">support@pretva.com</div>
                        <div className="col-md-1"><i class="fab fa-facebook-f"></i></div>
                        <div className="col-md-1"><i class="fab fa-instagram"></i></div>
                        <div className="col-md-1"><i class="fab fa-linkedin-in"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;