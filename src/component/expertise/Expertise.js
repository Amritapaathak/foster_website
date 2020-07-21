import React from 'react';
import './Expertise.css';
import { Link} from "react-router-dom";

const Expertise = () =>{
    return(
        <h1>
            <section className="py-5 our-exp-section">
	<div className="container container-adjust-width">
		<div className="row">
			<div className="col-12">
				<div className="heading--bar text-center pb-4">
					<h2 className="title-head text-uppercase">Our Expertise</h2>
					<p className="parg-disc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div className="service-box our-expertise py-5 px-3">
					<div className="column-flex">
						<div className="icon--left">
							<span className="icon-service icon-expert d-inline-block mb-3">
                                <img src="images/infographics.png" alt=""/>
                                <img src="images/infographics-w.png" className="expert-hover" alt=""/>
                                </span>
						</div>
						<div className="right-inform">
							<h3 className="serv-title">Infographics</h3>
							<p>We use in-house equipment and industry experts to make your research easy and efficient!</p>
						</div>
					</div>
					<div className="read-m mt-4"><Link className="btn more-btn px-5 py-1" to="#">Read More</Link></div>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div className="service-box our-expertise py-5 px-3">
					<div className="column-flex">
						<div className="icon--left">
							<span className="icon-service icon-expert d-inline-block mb-3">
                                <img src="images/business.png" alt=""/>
                                <img src="images/business-w.png" className="expert-hover" alt=""/>
                                </span>
						</div>
						<div className="right-inform">
							<h3 className="serv-title">Business Strategy</h3>
							<p>Syndicate research : study which is conducted and funded by a market research firm</p>
						</div>
					</div>
					<div className="read-m mt-4"><Link className="btn more-btn px-5 py-1" to="business-strategy.php">Read More</Link></div>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div className="service-box our-expertise py-5 px-3">
					<div className="column-flex">
						<div className="icon--left">
							<span className="icon-service icon-expert d-inline-block mb-3">
                                <img src="images/research.png" alt=""/>
                                <img src="images/research-w.png" className="expert-hover" alt=""/>
                                </span>
						</div>
						<div className="right-inform">
							<h3 className="serv-title">Research Methodology</h3>
							<p>Consultancy and Research at Foster Market Research is “A way of life” to faculty members</p>
						</div>
					</div>
					<div className="read-m mt-4"><Link className="btn more-btn px-5 py-1" to="#">Read More</Link></div>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div className="service-box our-expertise py-5 px-3">
					<div className="column-flex">
						<div className="icon--left">
							<span className="icon-service icon-expert d-inline-block mb-3">
                                <img src="images/forcasting.png" alt=""/>
                                <img src="images/forcasting-w.png" className="expert-hover" alt=""/>
                                </span>
						</div>
						<div className="right-inform">
							<h3 className="serv-title">Forecasting</h3>
							<p>Global Institute has been conducting an ongoing research program on automation technologies</p>
						</div>
					</div>
					<div className="read-m mt-4"><Link className="btn more-btn px-5 py-1" to="#">Read More</Link></div>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div className="service-box our-expertise py-5 px-3">
					<div className="column-flex">
						<div className="icon--left">
							<span className="icon-service icon-expert d-inline-block mb-3">
                                <img src="images/pricing.png" alt=""/>
                                <img src="images/pricing-w.png" className="expert-hover" alt=""/>
                                </span>
						</div>
						<div className="right-inform">
							<h3 className="serv-title">Pricing Analysis</h3>
							<p>The secret to mastering data like an analyst: a data dashboard for visual presentation</p>
						</div>
					</div>
					<div className="read-m mt-4"><Link className="btn more-btn px-5 py-1" to="#">Read More</Link></div>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div className="service-box our-expertise py-5 px-3">
					<div className="column-flex">
						<div className="icon--left">
							<span className="icon-service icon-expert d-inline-block mb-3">
                                <img src="images/s-and-d.png" alt=""/>
                                <img src="images/s-and-d-w.png" className="expert-hover" alt=""/>
                                </span>
						</div>
						<div className="right-inform">
							<h3 className="serv-title">S&D Analysis</h3>
							<p>Supply & Demand Analysis and Forecasting Report of Diffent Organisation</p>
						</div>
					</div>
					<div className="read-m mt-4"><Link className="btn more-btn px-5 py-1" to="#">Read More</Link></div>
				</div>
			</div>
		</div>
	</div>
</section>
        </h1>
    )
}

export default Expertise;