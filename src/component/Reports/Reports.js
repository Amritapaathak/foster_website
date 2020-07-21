import React from 'react'
import './Reports.css';
import {Link} from 'react-router-dom';

const Reports = () =>{
   return(
       <div>
           <section class="report-sec">
	<div class="container container-adjust-width">
		<div class="row">
			<div class="col-12">
				<div class="heading--bar text-center pb-5">
					<h2 class="title-head text-uppercase">View All New Reports</h2>
				</div>
			</div>
			<div class="col-12 col-md-12 col-lg-4 animatable bounceIn">
				<div class="report-box">
					<div class="imgbox-rep"><img src="images/smart-report.jpg" alt=""/></div>
					<h3 class="title-report">Smart Meters Market by Type</h3>
					<p class="disc-report">Smart Meters Market by Type (Electric, Gas, Water), Communication Type (RF, PLC, Cellular), Component (Hardware, Software), Technology (AMR, AMI), End-user (Residential, Commercial, Industrial), and Region - Global Forecast to 2025 Smart Meters Market by Type (Electric, Gas, Water)</p>
					<div class=""><Link to=""  class="btn btn-more-1 primary-bg text-uppercase px-4 text-white">View More</Link></div>
				</div>
			</div>
			<div class="col-12 col-md-12 col-lg-4 animatable bounceIn">
				<div class="report-box">
					<div class="imgbox-rep"><img src="images/data-center.jpg" alt=""/></div>
					<h3 class="title-report">Data Center Rack Market by Type</h3>
					<p class="disc-report">Data Center Rack Market by Component (Solutions and Services), Rack Type (Open Frame and Cabinets), Rack Height, Rack Width, Data Center Size (Small and Mid-sized Data Centers and Large Data Centers), Vertical, and Region - Global Forecast to 2025 Data Center Rack Market by Component (Solutions and</p>
					<div class=""><Link to=""  class="btn btn-more-1 primary-bg text-uppercase px-4 text-white">View More</Link></div>
				</div>
			</div>
			<div class="col-12 col-md-12 col-lg-4 animatable bounceIn">
				<div class="report-box">
					<div class="imgbox-rep"><img src="images/ethylen.jpg" alt=""/></div>
					<h3 class="title-report">Ethylene Carbonate Market by Type</h3>
					<p class="disc-report">Ethylene Carbonate Market by Application s(Lubricants, Lithium Battery Electrolytes, Plasticizers, Surface Coatings), By End-Use Industry (Automotive, Oil & Gas, Industrial, Medical, Personal Care & Hygiene), and Region - Global Forecast to 2025 Ethylene Carbonate Market by Application (Lubricants, Lithium</p>
					<div class=""><Link to=""  class="btn btn-more-1 primary-bg text-uppercase px-4 text-white">View More</Link></div>
				</div>
			</div>
		</div>
	</div>
</section>
       </div>
   )
}

export default Reports;