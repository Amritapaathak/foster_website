import React from 'react';
import './Companies.css';


const Companies  = () =>{
   return(
       <div>
           <section className="my-5 whyc-section primary-bg">
	<div className="fullwhy--bx">
		<div id="whyslider" className="carousel sliderwhy slide" data-ride="carousel">
		  {/* <!-- Indicators --> */}
		  <ul className="carousel-indicators choose-indicate slider-indicate">
		    <li data-target="#whyslider" data-slide-to="0" className="active"></li>
		    <li data-target="#whyslider" data-slide-to="1"></li>
		    <li data-target="#whyslider" data-slide-to="2"></li>
		  </ul>
		  {/* <!-- The slideshow --> */}
		  <div className="carousel-inner">
		    <div className="carousel-item active">
			    <div className="full-box--choose">
			    	<div className="row m-0 align-box-center">
						<div className="col-12 col-md-6 pl-0">
							<div className="why-img why-img-overlap">
								<img className="object-fit-cover-1" src="images/frst-why.jpg" alt=""/>
								<div className="why--us">
									<h2 className="title-head text-uppercase why-title text-white mb-4"><span>Why Choose </span><strong className="text-yellow">Foster's</strong>Services?</h2>
									<div className="read-why"><button className="btn px-4"><img src="icon/play.png" alt="" /></button></div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="right--bar-why">
								<h3 className="title--why">15,75% more</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry.</p>
								<div className="img-ch mt-3 text-center">
									<img src="images/graph.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
		    </div>
		    <div className="carousel-item">
			    <div className="full-box--choose">
			    	<div className="row m-0 align-box-center">
						<div className="col-12 col-md-6 pl-0">
							<div className="why-img">
								<img className="object-fit-cover-2" src="images/graph-2.png" alt="" />
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="right--bar-why">
								<h3 className="title--why">Our Companies push the edge of What is possible.</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry.</p>
							</div>
						</div>
					</div>
				</div>
		    </div>
		    <div className="carousel-item">
			    <div className="full-box--choose">
			    	<div className="row m-0 align-box-center">
						<div className="col-12 col-md-6 pl-0">
							<div className="why-img" style={{padding: "30px 30px"}}>
								<img className="object-fit-cover-3" src="images/third-why.png" alt="" />
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="right--bar-why">
								<h3 className="title--why">Our Companies push the edge of What is possible.</h3>
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