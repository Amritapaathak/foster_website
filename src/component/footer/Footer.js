import React from 'react';
import { Link} from "react-router-dom";

const Footer = () =>{
    return(
        <div>
           <footer class="bg-footer-grey">
			<div class="footer-top pt-5 pb-5">
				<div class="container-fluid">
					<div class="row mx-0 mx-lg-5 text-white justify-content-between">
						<div class="col-12 col-md-6 col-lg-4">
							<div class="footer-widgets">
								<h4 class="ftr-title text-uppercase">Contact US</h4>
								<p class="add-ftr"><span><img src="icon/message.png" alt=""/></span> <span class="add-rt"><a href="mailto:service@fostermarketresearch.com" class="text-white">service@fostermarketresearch.com</a></span></p>
								<p class="add-ftr"><span><img src="icon/location.png" alt=""/></span> <span class="add-rt">Dataforum, U-75, Kalra Complex, First Floor, Shakarpur, New Delhi - 110092</span></p>
								<p class="add-ftr"><span><img src="icon/call.png" alt=""/></span> <span class="add-rt"> +91 - 8700979768</span></p>
								<div class="two-address mt-5">
									<p class="add-ftr"><span><img src="icon/location.png" alt="" /></span> <span class="add-rt">Dataforum, U-75, Kalra Complex, First Floor, Shakarpur, New Delhi - 110092</span></p>
									<p class="add-ftr"><span><img src="icon/call.png" alt=""/></span> <span class="add-rt"> +91 - 8700979768</span></p>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-2">
							<div class="footer-widgets">
								<h4 class="ftr-title text-uppercase">Quick Links</h4>
								<ul class="menu-ftr-link">
									<li class="link-ftr"><Link to="/terms-conditions">Terms & Conditions</Link></li>
									<li class="link-ftr"><Link to="/privacy-policy" >Privacy Policy</Link></li>
									<li class="link-ftr"><Link to="/disclaimer" >Disclaimer</Link></li>
									<li class="link-ftr"><Link to="/return-policy" >Return policy</Link></li>
									<li class="link-ftr"><Link to="/subscription" >Subscription</Link></li>
								</ul>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-2">
							<div class="footer-widgets">
								<h4 class="ftr-title text-uppercase">Menu</h4>
								<ul class="menu-ftr-link">
								
									<li class="link-ftr"><Link to="/about-us" >About Us</Link></li>
									<li class="link-ftr"><Link to="/who-we-are" >Who we are</Link></li>
									<li class="link-ftr"><Link to="/why-foster" >Why foster</Link></li>
									<li class="link-ftr"><Link to="/our-global-reach" >Our Global Reach</Link></li>
									<li class="link-ftr"><Link to="/contact-us" >Contact Us</Link></li>
								</ul>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-4">
							<div class="footer-widgets">
								<h4 class="ftr-title text-uppercase">Connect With Us</h4>
								<ul class="social-ftr d-flex flex-wrap">
									<li class="link-social"><Link to="" ><img src="icon/instagram.png" alt=""/></Link></li>
									<li class="link-social"><Link to="" ><img src="icon/facebook.png" alt="" /></Link></li>
									<li class="link-social"><Link to="" ><img src="icon/twitter.png" alt=""/></Link></li>
									<li class="link-social"><Link to="" ><img src="icon/whatsapp.png" alt="" /></Link></li>
								</ul>
								<div class="payment-secure my-4">
									<img src="images/payment.png" alt=""/>
									<h6 class="text-uppercase">Secure Payment By</h6>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting Industry</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-bottom primary-bg py-3">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<p class="text-white mb-0 text-center copywrite">© 2020 Foster Market Research - All rights reserved</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
        </div>
    )
}

export default Footer;