import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
class Footer extends Component{
    render(){
        let shdata = this.props.shdata;
        return(
            <section className="footer-area">
                <div className="container">
                    <div className="footer-content">
                        <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s">
                            <img src={require('../image/logo2.png')} alt=""/>
                        </Link>
                        <Fade top cascade>
                            <ul className="list_style">
                                {
                                    shdata.socialLinks.map(item =>{
                                        return(
                                            <li key={item.name}>
                                                <a  href={item.url}><i className={item.className}></i></a> 
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Fade>
                        
                        <h6>Made with love by <a href="https://www.shohruh.io">Shohruh</a></h6>
                        <p>© 2023 Shohruh - All Rights Reserved</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Footer;