import React from 'react';
import {Link} from 'react-router-dom';
import b1 from './Fragements/images/b1.jpg'
import About from './Fragements/About'
import Buyers from './Fragements/Buyers'
import Suppliers from './Fragements/Suppliers'
import Register from './Fragements/Register'


const Home = () => (
    <div >
        <img className="img-responsive" src={b1} style={{height: "700px" , width: "100%" , objectFit:"cover"}} />
        <About/>
        <Buyers/>
        <Suppliers />
        <Register/>
    </div>
)


export default Home;