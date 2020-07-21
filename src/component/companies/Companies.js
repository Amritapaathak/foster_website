import React from 'react';
import './Companies.css';


const Companies  = () =>{
   return(
       <div>
           <section class="my-5 whyc-section primary-bg">
	<div class="fullwhy--bx">
		<div id="whyslider" class="carousel slide" data-ride="carousel">
		  {/* <!-- Indicators --> */}
		  <ul class="carousel-indicators choose-indicate slider-indicate">
		    <li data-target="#whyslider" data-slide-to="0" class="active"></li>
		    <li data-target="#whyslider" data-slide-to="1"></li>
		    <li data-target="#whyslider" data-slide-to="2"></li>
		  </ul>
		  {/* <!-- The slideshow --> */}
		  <div class="carousel-inner">
		    <div class="carousel-item active">
			    <div class="full-box--choose">
			    	<div class="row m-0 align-box-center">
						<div class="col-12 col-md-6 pl-0">
							<div class="why-img why-img-overlap">
								<img class="object-fit-cover" src="images/frst-why.jpg" alt=""/>
								<div class="why--us">
									<h2 class="title-head text-uppercase why-title text-white mb-4"><span>Why Choose </span><strong class="text-yellow">Foster's</strong>Services?</h2>
									<div class="read-why"><button class="btn px-4"><img src="icon/play.png" alt="" /></button></div>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6">
							<div class="right--bar-why">
								<h3 class="title--why">15,75% more</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry.</p>
								<div class="img-ch mt-3 text-center">
									<img src="images/graph.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
		    </div>
		    <div class="carousel-item">
			    <div class="full-box--choose">
			    	<div class="row m-0 align-box-center">
						<div class="col-12 col-md-6 pl-0">
							<div class="why-img">
								<img class="object-fit-cover" src="images/graph-2.png" alt="" />
							</div>
						</div>
						<div class="col-12 col-md-6">
							<div class="right--bar-why">
								<h3 class="title--why">Our Companies push the edge of What is possible.</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry.</p>
							</div>
						</div>
					</div>
				</div>
		    </div>
		    <div class="carousel-item">
			    <div class="full-box--choose">
			    	<div class="row m-0 align-box-center">
						<div class="col-12 col-md-6 pl-0">
							<div class="why-img" style={{padding: "100px 30px"}}>
								<img class="object-fit-cover" src="images/third-why.png" alt="" />
							</div>
						</div>
						<div class="col-12 col-md-6">
							<div class="right--bar-why">
								<h3 class="title--why">Our Companies push the edge of What is possible.</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry.</p>
							</div>
						</div>
					</div>
				</div>
		    </div>

		  </div>
		
		</div>
	</div>
</section>
       </div>
   )
}

export default Companies;