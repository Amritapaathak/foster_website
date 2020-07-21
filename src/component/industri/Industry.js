import React from 'react';
import './Industry.css';
import {Link} from 'react-router-dom';
const Industry = () =>{
   return(
       <div>
         <section class="py-5">
	<div class="container container-adjust-width">
		<div class="row">
			<div class="col-12">
				<div class="heading--bar text-center pb-4">
					<h2 class="title-head text-uppercase"><span class="border-indus">Industries</span></h2>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceInLeft">
				<div class="service-box sec-box-1 py-4 text-center" style={{backgroundImage: "url(images/pharm.jpg)"}} >
					<div class="indus-box-effort">
						<h3 class="serv-title indust-title">Pharmaceutical &<br/> Therapeutics</h3>
						<div class="read-m mt-5"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div class="service-box sec-box-1 py-4 text-center" style={{backgroundImage:"url(images/medical.jpg)"}} >
					<div class="indus-box-effort">
						<h3 class="serv-title indust-title">Medical<br/> Imaging</h3>
						<div class="read-m mt-5"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceInRight">
				<div class="service-box sec-box-1 py-4 text-center" style={{backgroundImage:"url(images/medical-2.jpg)"}}>
					<div class="indus-box-effort">
						<h3 class="serv-title indust-title">Medical<br/> Device</h3>
						<div class="read-m mt-5"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceInLeft">
				<div class="service-box sec-box-1 py-4 text-center" style={{backgroundImage:"url(images/vetinary.jpg)"}}>
					<div class="indus-box-effort">
						<h3 class="serv-title indust-title">Veterinary<br/> Healthcare</h3>
						<div class="read-m mt-5"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div class="service-box sec-box-1 py-4 text-center" style={{backgroundImage:"url(images/health.jpg)"}} >
					<div class="indus-box-effort">
						<h3 class="serv-title indust-title">Healthcare<br/> IT</h3>
                        <div class="read-m mt-5"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceInRight">
				<div class="service-box sec-box-1 py-4 text-center" style={{backgroundImage:"url(images/nutrition.jpg)"}}>
					<div class="indus-box-effort">
						<h3 class="serv-title indust-title">Nutrition<br/> & Feed</h3>
						<div class="read-m mt-5"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceInLeft">
				<div class="service-box sec-box-1 py-4 text-center" style={{backgroundImage:"url(images/clinical.jpg)"}}>
					<div class="indus-box-effort">
						<h3 class="serv-title indust-title">Clinical Diagnostic</h3>
						<div class="read-m mt-5"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceIn">
				<div class="service-box sec-box-1 py-4 text-center" style={{backgroundImage:"url(images/biotechnical.jpg)"}} >
					<div class="indus-box-effort">
						<h3 class="serv-title indust-title">Biotechnology</h3>
						<div class="read-m mt-5"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4 animatable bounceInRight">
				<div class="service-box sec-box-1 py-4 text-center"  style={{backgroundImage:"url(images/cosmetic.jpg)"}}>
					<div class="indus-box-effort">
						<h3 class="serv-title indust-title">Cosmetics</h3>
						<div class="read-m mt-5"><Link class="btn more-btn px-5 py-1" to="#">Read More</Link></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
       </div>
   )
}

export default Industry;