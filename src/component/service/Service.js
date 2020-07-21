import React from 'react';
import './Service.css';
import {Link} from 'react-router-dom';
 
const Service = () =>{
    return(
        <div>
            <section className="py-5" >
	<div className="container">
		<div className="row">
			<div className="col-12">
				<div className="heading--bar text-center pb-4">
					<h2 className="title-head text-uppercase">Services</h2>
				</div>
			</div>
			<div className="col-12 col-md-12 col-lg-4 animatable bounceInLeft">
				<div className="service-box wigit-sevice-box py-4 px-5 text-center">
					<Link to="/customre-search" className="alink-box-service">
						<span className="icon-service d-inline-block mb-3">
                            <img src="images/custom.png" alt=""/>
                            <img src="images/custom-1.png"  alt="" className="top-hover"/></span>
						<h3 className="serv-title" >Custom Research</h3>
					</Link>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable fadeInDown">
				<div className="service-box wigit-sevice-box py-4 px-5 text-center">
				<Link to="/syndicate-research" className="alink-box-service">
						<span className="icon-service d-inline-block mb-3">
                            <img src="images/syndicate.png" alt=""/>
                                <img src="images/syndicate-1.png" alt="" className="top-hover"/>

                                </span>
						<h3 className="serv-title">Syndicate Research</h3>
					</Link>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable bounceInRight">
				<div className="service-box wigit-sevice-box py-4 px-5 text-center">
				<Link to="/consulting-services" className="alink-box-service">
						<span className="icon-service d-inline-block mb-3">
                            <img src="images/consulting.png" alt=""/>
                                <img src="images/consulting-1.png" alt="" className="top-hover"/></span>
						<h3 className="serv-title">Consulting Services</h3>
					</Link>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable bounceInLeft">
				<div className="service-box wigit-sevice-box py-4 px-5 text-center">
				<Link to="/report-automation" className="alink-box-service">
						<span className="icon-service d-inline-block mb-3">
                            <img src="images/report.png" alt="" />
                                <img src="images/report-1.png" className="top-hover" alt=""/></span>
						<h3 className="serv-title">Report Automation</h3>
					</Link>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable fadeInUp">
				<div className="service-box wigit-sevice-box py-4 px-5 text-center">
				<Link to="/dashboard" className="alink-box-service">
						<span className="icon-service d-inline-block mb-3">
                            <img src="images/dashboard.png" alt="" />
                            <img src="images/dashboard-1.png" alt="" className="top-hover"/></span>
						<h3 className="serv-title">Dashboard</h3>
					</Link>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable bounceInRight">
				<div className="service-box wigit-sevice-box py-4 px-5 text-center">
				<Link to="/subscription" className="alink-box-service">
						<span className="icon-service d-inline-block mb-3">
                            <img src="images/subscription.png" alt=""/>
                                <img src="images/subscription-1.png" alt="" className="top-hover"/></span>
						<h3 className="serv-title">Subscription</h3>
					</Link>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    )
}

export default Service;

