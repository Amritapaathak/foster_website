import React from 'react';
import './Slider.css';
import {Link} from 'react-router-dom';
 
const Slider = () =>{
    return(
        <div>
      <section className="banner-sec">
	<div className="banner">
		<div id="sliderbanner" className="carousel slide" data-ride="carousel">
		  {/* <!-- Indicators --> */}

		  <ul className="carousel-indicators banner-indicate slider-indicate">
		    <li data-target="#sliderbanner" data-slide-to="0" className="active"></li>
		    <li data-target="#sliderbanner" data-slide-to="1"></li>
		    <li data-target="#sliderbanner" data-slide-to="2"></li>
		  </ul>
		  {/* <!-- The slideshow --> */}
		  <div className="carousel-inner">
		    <div className="overlay-img item-banner carousel-item active">
		      <img className="banner-resp-t" src="images/banner1.jpg" alt=""/>
		      <div className="carousel-caption caption-position">
		      	<div className="container">
		      		<div className="row align-items-center">
		      			<div className="col-12 col-sm-4 col-md-4 col-lg-5">
		      				<div className="text-center">
							    <div className="banner-f-res block animatable bounceInLeft">
							    	<img src="images/banner-inside.png" alt=""/>
							    </div>
							</div>
						</div>
						<div className="col-12 col-sm-8 col-md-8 col-lg-7">
							<ul className="top-list">
								<li className="d-flex flex-wrap list--banner">
									<span className="num-1 block animatable bounceInRight">1,560,750</span>
									<span className="text-p1 text-uppercase block animatable bounceInLeft">Project were developed, financed and completed with our help.</span>
								</li>
								<li className="d-flex flex-wrap list--banner">
									<span className="num-1 block animatable bounceInRight">350,255</span>
									<span className="text-p1 text-uppercase block animatable bounceInLeft">New users follow us and have recently opted in to our mailing list</span>
								</li>
								<li className="d-flex flex-wrap list--banner">
									<span className="num-1 block animatable bounceInRight">750,255</span>
									<span className="text-p1 text-uppercase block animatable bounceInLeft">Companies have put their trust in us and hired our awesome team.</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			  </div>
		    </div>

			<div className="overlay-img item-banner carousel-item">
		      <img className="banner-resp-t" src="images/banner1.jpg" alt=""/>
		      <div className="carousel-caption caption-position">
		      	<div className="container">
		      		<div className="row align-items-center">
		      			<div className="col-12 col-sm-4 col-md-4 col-lg-5">
		      				<div className="text-center">
							    <div className="banner-f-res block animatable bounceInLeft">
							    	<img src="images/banner-inside.png" alt=""/>
							    </div>
							</div>
						</div>
						<div className="col-12 col-sm-8 col-md-8 col-lg-7">
							<ul className="top-list">
								<li className="d-flex flex-wrap list--banner">
									<span className="num-1 block animatable bounceInRight">1,560,750</span>
									<span className="text-p1 text-uppercase block animatable bounceInLeft">Project were developed, financed and completed with our help.</span>
								</li>
								<li className="d-flex flex-wrap list--banner">
									<span className="num-1 block animatable bounceInRight">350,255</span>
									<span className="text-p1 text-uppercase block animatable bounceInLeft">New users follow us and have recently opted in to our mailing list</span>
								</li>
								<li className="d-flex flex-wrap list--banner">
									<span className="num-1 block animatable bounceInRight">750,255</span>
									<span className="text-p1 text-uppercase block animatable bounceInLeft">Companies have put their trust in us and hired our awesome team.</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			  </div>
		    </div>

			<div className="overlay-img item-banner carousel-item ">
		      <img className="banner-resp-t" src="images/banner1.jpg" alt=""/>
		      <div className="carousel-caption caption-position">
		      	<div className="container">
		      		<div className="row align-items-center">
		      			<div className="col-12 col-sm-4 col-md-4 col-lg-5">
		      				<div className="text-center">
							    <div className="banner-f-res block animatable bounceInLeft">
							    	<img src="images/banner-inside.png" alt=""/>
							    </div>
							</div>
						</div>
						<div className="col-12 col-sm-8 col-md-8 col-lg-7">
							<ul className="top-list">
								<li className="d-flex flex-wrap list--banner">
									<span className="num-1 block animatable bounceInRight">1,560,750</span>
									<span className="text-p1 text-uppercase block animatable bounceInLeft">Project were developed, financed and completed with our help.</span>
								</li>
								<li className="d-flex flex-wrap list--banner">
									<span className="num-1 block animatable bounceInRight">350,255</span>
									<span className="text-p1 text-uppercase block animatable bounceInLeft">New users follow us and have recently opted in to our mailing list</span>
								</li>
								<li className="d-flex flex-wrap list--banner">
									<span className="num-1 block animatable bounceInRight">750,255</span>
									<span className="text-p1 text-uppercase block animatable bounceInLeft">Companies have put their trust in us and hired our awesome team.</span>
								</li>
							</ul>
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

export default Slider;