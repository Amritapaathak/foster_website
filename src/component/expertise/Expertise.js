import React from 'react';
import './Expertise.css';
import { Link} from "react-router-dom";

const Expertise = () =>{
    return(
        <h1>
            <section class="py-5 our-exp-section">
	<div class="container container-adjust-width">
		<div class="row">
			<div class="col-12">
				<div class="heading--bar text-center pb-4">
					<h2 class="title-head text-uppercase">Our Expertise</h2>
					<p class="parg-disc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div class="service-box our-expertise py-5 px-3">
					<div class="column-flex">
						<div class="icon--left">
							<span class="icon-service d-inline-block mb-3">
                                <img src="images/infographics.png" alt=""/></span>
						</div>
						<div class="right-inform">
							<h3 class="serv-title">Infographics</h3>
							<p>We use in-house equipment and industry experts to make your research easy and efficient!</p>
						</div>
					</div>
					<div class="read-m mt-4"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div class="service-box our-expertise py-5 px-3">
					<div class="column-flex">
						<div class="icon--left">
							<span class="icon-service d-inline-block mb-3">
                                <img src="images/business.png" alt=""/></span>
						</div>
						<div class="right-inform">
							<h3 class="serv-title">Business Strategy</h3>
							<p>Syndicate research : study which is conducted and funded by a market research firm</p>
						</div>
					</div>
					<div class="read-m mt-4"><Link class="btn more-btn px-5 py-1" to="business-strategy.php">Read More</Link></div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div class="service-box our-expertise py-5 px-3">
					<div class="column-flex">
						<div class="icon--left">
							<span class="icon-service d-inline-block mb-3">
                                <img src="images/research.png" alt=""/></span>
						</div>
						<div class="right-inform">
							<h3 class="serv-title">Research Methodology</h3>
							<p>Consultancy and Research at Foster Market Research is “A way of life” to faculty members</p>
						</div>
					</div>
					<div class="read-m mt-4"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div class="service-box our-expertise py-5 px-3">
					<div class="column-flex">
						<div class="icon--left">
							<span class="icon-service d-inline-block mb-3">
                                <img src="images/forcasting.png" alt=""/></span>
						</div>
						<div class="right-inform">
							<h3 class="serv-title">Forecasting</h3>
							<p>Global Institute has been conducting an ongoing research program on automation technologies</p>
						</div>
					</div>
					<div class="read-m mt-4"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div class="service-box our-expertise py-5 px-3">
					<div class="column-flex">
						<div class="icon--left">
							<span class="icon-service d-inline-block mb-3">
                                <img src="images/pricing.png" alt=""/></span>
						</div>
						<div class="right-inform">
							<h3 class="serv-title">Pricing Analysis</h3>
							<p>The secret to mastering data like an analyst: a data dashboard for visual presentation</p>
						</div>
					</div>
					<div class="read-m mt-4"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div class="service-box our-expertise py-5 px-3">
					<div class="column-flex">
						<div class="icon--left">
							<span class="icon-service d-inline-block mb-3">
                                <img src="images/s-and-d.png" alt=""/></span>
						</div>
						<div class="right-inform">
							<h3 class="serv-title">S&D Analysis</h3>
							<p>Supply & Demand Analysis and Forecasting Report of Diffent Organisation</p>
						</div>
					</div>
					<div class="read-m mt-4"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
				</div>
			</div>
		</div>
	</div>
</section>
        </h1>
    )
}

export default Expertise;