
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Subscription = () =>{
    
    return(
        <div>
            <Header/>
         <section class="pt-100 pb-100 about-sec"
          style ={ { backgroundImage: "url(images/about-us.jpg)" } }>
         <div class="container">
		<div class="row">
			<div class="col-12">
				<div class="about--row">
					<h1 class="text-uppercase banner-heading text-white">WHY SUBSCRIBE <br/>TO <span class="text-yellow">FOSTER</span></h1>
				</div>
			</div>
		</div>
	</div>
</section> 
<section class="pt-100 pb-100 ab-foster-sec">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="fl-about--fost">
					<p>Foster plans to interface the experts around the world with the best research bits of knowledge and investigation to assist them with upgrading their market position. </p>
					<p>Foster offers immense choice of reports and methods to enhance business objectives and require some serious energy basic choices. With years of experienced and dedicated analysts and consultants, we aim to provide you the best possible solutions to your marketing and industrial problems. Experienced consultants and advisors and a committed group set us apart. Be it the current medications or the rising ones, regardless of whether it's an uncommon malady or the most common ones, Foster has secured everything. Thriving to offer the best bits of knowledge for helping customers gain an edge over the market.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="py-5 comn-position-bg" style ={ { backgroundImage: "url(images/price-stydy.jpg)" } } >
	<div class="container">
		<div class="row">
			<div class="col-12 col-md-6 offset-md-6">
				<div class="max-content">
					<h3 class="title-insid price-yell"><span class="cons-txt-n">Before Buying Our</span>Subscription</h3>
					<p class="parg-disc text-white">Have a chat with our experienced analysts and discuss your business goals, layout your strategies and techniques so that they could analyze and provide you best possible solution to strengthen your business.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="py-5 why-subscribe" style ={ { backgroundImage: "url(images/subcribe.jpg)" } } >
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="other-propty">
					<h3 class="title-head mb-4">Why <span class="font-weight-400">subscribe us?</span></h3>
					<ul class="list--col">
						<li class="point-list">We offer statistical reports with exceptionally custom fitted requirements to our customers. Be it the strategy based knowledge or the general report type, they can be used by clients for growing their business and sustaining it, at significant savings.</li>
						<li class="point-list">The reports are modified for each and everybody. In the event that you are an organization or an individual, the memberships can be modified to serve you and your specific needs.</li>
						<li class="point-list">Connect with our team to alter your subscription packages according to your necessities and gain premium benefits at no hidden costs.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="pt-5 pb-150 m-stagy">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h3 class="title-head mb-4"><span class="font-weight-400">Subscription</span> Flexibility</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="other-propty">
					<h3 class="title-insid flex-title mb-4 text-uppercase">After Buying Our Subscription</h3>
					<ul class="list--col">
						<li class="point-list">Attain full access to number of wide variety of both published and upcoming KPI-based reports across all verticals at one spot.</li>
						<li class="point-list">Easy access of reports in all formats (MS PPT, PDF, and Spreadsheet).</li>
						<li class="point-list">Gain free updates on market patterns, trends, and significant impact analysis.</li>
						<li class="point-list">Easy accessible to dashboards, individual segments, analysis and graphical representations.</li>
					</ul>
				</div>
			</div>
			<div class="col-md-6">
				<div class="other-propty">
					<h3 class="title-insid flex-title mb-4 text-uppercase">Gain Premium Benefits</h3>
					<ul class="list--col">
						<li class="point-list">Receive free pre and post-purchase assistance calls with our sales team.</li>
						<li class="point-list">Free Analyst/Consultant interaction as and when required for the projects. </li>
						<li class="point-list">Clients will be assigned a dedicated account manager to answer all the necessary queries and deliveries.</li>
						<li class="point-list">Permit global license to all the studies in order to allow multiple viewing and sharing. </li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer/>
        </div>
    )
}

export default Subscription;