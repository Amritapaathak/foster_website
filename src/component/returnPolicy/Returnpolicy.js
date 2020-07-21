

import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Returnpolicy = () =>{
    
    return(
        <div>
            <Header/>
         <section class="pt-100 pb-100 about-sec"
          style ={ { backgroundImage: "url(images/return-policy-bg.jpg)" } }>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="about--row">
					<h1 class="text-uppercase banner-heading text-white text-uppercase">Return Policy</h1>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="pt-5 pb-5 max-section">
	<div class="container">
		<div class="row rtn-row-wig">
			<div class="col-12 col-md-5 primary-bg left-sideretun-bg">
				<div class="return--pl">
					<p class="parg-disc">
                        <span>The buyer is obligated to pay</span>
                        <span> Foster Market Research for its</span>
                         <span>services and content as</span>
                         <span> Expressed on the website,</span>
                         <span> And would likewise be liable</span>
                         <span> For all other related taxes</span>
                         <span> And obligations as Relevant</span></p>
					<div class="mt-3">
                        <img src="images/signature.png"/></div>
				</div>
			</div>
			<div class="col-12 col-md-7 p-0">
				<div class="right-returnp">
					<img src="images/return-child.jpg"/>
				</div>
			</div>
		</div>
	</div>
</section> 
<section class="pt-5 pb-5 max-section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="max-content">
					<p class="parg-disc bl-point">Once the purchase is done from Foster’s site it would be considered to be conclusive. We would firmly suggest reaching our sales team if there should arise an occurrence of any questions relating to the purchase before further going in and finishing the transaction. If there should be an occurrence of any technicalities or error with respect to the purchase of the report, the customer is encouraged to contact foster’s client assistance group at the soonest possible time.</p>
					<p class="parg-disc bl-point">Services and commodities once dispatched can't be returned or refundable. Any discounts offered (under uncommon conditions) would be at the sole tact of Foster Market Research. In term of any return accepted by Foster, we will provide it only in the form of Foster’s credit that will be equal to the accepted sum. The credits that we provide should be used in the time period of 12 months from the date or purchase.</p>
					<p class="parg-disc bl-point">In the improbable instance of absent or inadequate information in our statistical surveying report, free customization of the report being referred to would be given by Foster Market Research. This is dependent upon credibility of the issue and mutual concern of both the groups associated.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer/>
        </div>
    )
}

export default Returnpolicy;