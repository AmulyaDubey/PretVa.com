import React, {Component} from 'react';

class About extends Component{
    render(){
         return(
            <div>
                <div className="container">
        <h1 style={{textAlign: "center", marginTop: "70px", fontSize: "50px"}}><strong>PretVA Welcomes you!</strong></h1>
        <h1 className="lead" style={{textAlign: "center", marginTop: "10px", fontSize: "20px",}}><em>Your very own virtual assistant for fashion sourcing.</em></h1>
        </div>
        <div className="col-md-3 offset-1">
        <i class="fas fa-quote-left fa-5x"></i>
        </div>
        <div className="container" style={{backgroundColor: "black", width: "1000px", color:"white", marginTop: "-20px", padding: "30px 30px 30px 30px", borderRadius: "20px"}}>
            <strong style={{fontSize: "40px", textAlign: "center"}}>What we do?</strong> <br/> <br/>
            <em>We are a marketplace for fashion brands to connect and work with suppliers seamlessly. < br/> We are here to make apparel production time and cost efficient. Fashion sourcing has never been so hassle free and effortless,<br/> at just a click of a button.</em>
            <br/>
            <button className="btn btn-primary btn-raised " style={{backgroundColor: "white", color:"Black", marginTop:"30px", padding: "10px 20px 10px 20px", textTransform: "none", fontSize: "18px", boxShadow:"0 0"}}>Learn More</button>
        </div>
        <div className="col-md-3 offset-10" >
        <i class="fas fa-quote-right fa-5x"></i>
        </div>
        <hr/>
        </div>
        )
    }
}
export default About