import React, {Component} from 'react';
import {Fade, Reveal} from 'react-reveal/';

class About extends Component {
    render(){
        let shdata = this.props.shdata; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">{shdata.aboutme}</h2>
                                    <h6>{shdata.role}</h6>
                                    <p>{shdata.aboutdetails}</p>
                                    <a href={require('./resume.pdf')} className="theme_btn" download> Download CV</a>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src={require('../image/apporoach_man_img.png')} alt=""/></Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
