
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Whyfoster = () =>{
    
    return(
        <div>
            <Header/>
         <section class="pt-100 pb-100 about-sec"
          style ={ { backgroundImage: "url(images/why-foster-bg.jpg)" } }>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="about--row">
					<h1 class="text-uppercase banner-heading text-white text-uppercase">WHY CHOOSE  <br/><span class="text-yellow">FOSTER’S SERVICES?</span></h1>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="py-5 mt-5 pb-100 comn-position-bg" 
style ={ { backgroundImage: "url(images/why-foster-bg.jpg)" } }
style ={ { backgroundImage: "url(images/foster-bg-para.jpg)" } }
 >
	<div class="container">
		<div class="row align-foster-w">
			<div class="col-12 col-md-7">
				<div class="why-foster-con">
					<p class="parg-disc text-white">We aim to provide our clients with best possible solutions to outrank their business in the dynamic market. With the support of our experienced analysts, problem solving consultants and dedicated customer support we thrive to provide in-depth knowledge of competitors to outsmart them, analyzed market trends to choose the best possible route, and conclusive study of distribution channels to increase profit and reduce risks, and many more.</p>
					<h4>Here are some key points which will help you understand as to <span>why choose us?</span></h4>
				</div>
			</div>
			<div class="col-12 col-md-5">
				<div class="right-sp-foster">
					<img src="images/speaker-img.png"/>
				</div>
			</div>
		</div>
	</div>
</section> 
<section class="py-5 micr-section">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-sm-9 col-md-6 col-lg-4 mac-colum">
				<div class="box-max-f">
					<h3 class="head-2">Unchallenged Customer Experience</h3>
					<p class="parg-disc">We give priority to our client needs by providing them with hassle free experience with us. We are trusted by numerous organizations by giving them an unchallenged customer experience.</p>
				</div>
			</div>
			<div class="col-12 col-sm-9 col-md-6 col-lg-4 mac-colum">
				<div class="box-max-f">
					<h3 class="head-2">Work Reliability And Reputation</h3>
					<p class="parg-disc">We are reliable as well as well reputed for our work in order to meet the needs of growing number of clients and organizations. Fulfilling their requirements is our duty.  </p>
				</div>
			</div>
			<div class="col-12 col-md-6 col-sm-9 col-lg-4 mac-colum">
				<div class="box-max-f">
					<h3 class="head-2">Dedicated Customer Support</h3>
					<p class="parg-disc">With our team of dedicated customer support personnel, you need not to worry to resolve your queries related to products and other factors. All your queries will be settled instantly with just a phone call.</p>
				</div>
			</div>
			<div class="col-12 col-md-6 col-sm-9 col-lg-4 mac-colum">
				<div class="box-max-f">
					<h3 class="head-2">Experienced Consultants and Analysts</h3>
					<p class="parg-disc">Our consultants and analysts are working continuously to guide you and provide you with the intensive market knowledge through our syndicate and custom reports. We don't cohere to a one size fits all policy. As every business have different sets of standards and end goals so we are continuously analyzing and researching to provide our clients reports related to their specific business.</p>
				</div>
			</div>
			<div class="col-12 col-md-6 col-sm-9 col-lg-4 mac-colum">
				<div class="box-max-f">
					<h3 class="head-2">Price Flexibility</h3>
					<p class="parg-disc">Our subscription packages are bendable according to our client’s specific needs and are also cost effective to choose. We also offer subscription modification so that you can change and adjust your reports and analytics data without any hidden charges.</p>
				</div>
			</div>
			<div class="col-12 col-md-6 col-sm-9 col-lg-4 mac-colum">
				<div class="box-max-f">
					<h3 class="head-2">Work Before Deadline</h3>
					<p class="parg-disc">We are dedicated to provide our clients their custom and syndicate reports before the given deadline so that you won’t have any delays in your work. No rush with work and rechecked and reanalyzed reports and studies so that you can rest assured of quality and genuine result.</p>
				</div>
			</div>
			<div class="col-12 col-md-6 col-sm-9 col-lg-4 mac-colum">
				<div class="box-max-f">
					<h3 class="head-2">Clients Personal Data Safety</h3>
					<p class="parg-disc">We treasure our client’s personal data and give it full encryption. We deal with different clients individually and no data is shared in between. Client’s personal data safety is one of our top priorities.</p>
				</div>
			</div>
			<div class="col-12 col-md-6 col-sm-9 col-lg-4 mac-colum">
				<div class="box-max-f">
					<h3 class="head-2">Secured Payment Gateway</h3>
					<p class="parg-disc">We use PayPal and different other payment gateways for completely secured and hassle free payments for our products and services. So our clients can securely do their payments with us. We do not store any personal information with us.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<Footer/>
        </div>
    )
}

export default Whyfoster;