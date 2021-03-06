import React, { Component } from 'react';
import buyers1 from './images/buyers1.jpeg'
import { Link, animateScroll as scroll } from "react-scroll";



class Buyers extends Component {
    render() {
        return (
            <div>
                <img src={buyers1} style={{ width: "100%", height: "600px", objectFit: "cover" }} />
                <h1 style={{ textAlign: "right", fontSize: "60px", marginTop: "-500px" }}><strong>Services for Brands</strong></h1>
                <h1 className="lead" style={{ textAlign: "right", marginTop: "10px", fontSize: "20px", paddingRight: "100px" }}><em>Our hassle free services at a glance.</em></h1>
                <div style={{ marginTop: "500px" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="container" style={{ backgroundColor: "#D4D0CF", padding: "100px 100px 100px 100px" }}>
                                <h1><strong>Are you a buyer, designer or a retailer in the fashion space?</strong></h1>
                                <br /><br />
                                <p className="lead" >We are here to provide you end to end inventory management solutions. Simplify the apparel production process with our consciously looked after, time and cost efficient digital solutions. Get a glance at our services below! </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="container" style={{ backgroundColor: "white", padding: "100px 100px 90px 100px", border: " #D4D0CF solid 2px" }}>
                                <h1><strong>Our Services</strong></h1>
                                <br /><br />
                                <p className="lead" >
                                    <ul>
                                        <li>Get access to a wide network of verified vendors and suppliers globally  </li>
                                        <li>Negotiate & fix quotations virtually with top quality customer support</li>
                                        <li>Get free samples for quality check</li>
                                        <li>Track your shipment status in real time</li>
                                        <li>Plan cost cutting strategies for sourcing through our AI assistant</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container" style={{ marginTop: "70px" }}>
                        <center>
                            <p className="lead" style={{ fontSize: "25px", lineHeight: "1.75em" }}>If you’re interested in learning more about our services, simply request a free demo!</p>
                            <button type="button" onClick={(()=> scroll.scrollTo(4700))} class="btn btn-outline-dark" style={{ padding: "10px 20px 10px 20px" }}>Request Demo</button>

                        </center>
                    </div>
                    <br /> <br /> <hr />
                </div>
            </div>
        )
    }
}
export default Buyers