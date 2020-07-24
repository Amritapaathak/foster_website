import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
 
const Header = () =>{
   return(
       <div>
          <header>
			<div className="top-header primary-bg">
                <div className="container container-adjust-width">
					<div className="row">
                        <div className="col-12 col-md-12 col-lg-6 d-none d-md-block">
                           <div className="info-top">
                            <ul className="top-contact d-flex flex-wrap">
                              <li className="list-tt-cont pr-3">
                              <span className="messg-icn mr-2">
									<img src="icon/email.png" alt=""/>
   <Link className="text-white" to="mailto:service@fostermarketresearch.com"> {"  "} service@fostermarketresearch.com</Link>
							  </span>
                              </li>
                              <li className="list-tt-cont">
										<span className="mobile-icn mr-2">
											<img src="icon/mobile.png" alt=""/>
										</span>
										<Link to="tel:+91-8700979768" className="text-white">+91-8700979768 </Link>
									</li>
                            </ul>
                           </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
							<div className="login-men">
								<ul className="tw-log d-flex justify-content-end align-items-center">
									<li className="lg-tt mr-3">
                                        {/* <button className="btn text-white text-uppercase">
                                            <span><img src="icon/register.png" alt=""/>
                                            </span>REGISTER</button> */}
											<Link className="navbar-brand" className="btn text-white text-uppercase" to="/register">
                                            <span><img src="icon/login.png" alt=""/>
                                        </span>REGISTER
                                     </Link>
                                            </li>
									<li className="lg-tt active-bt">
									<Link className="navbar-brand" className="btn yellow-bg text-uppercase" to="/login">
                                            <span><img src="icon/login.png" alt=""/>
                                        </span>LOGIN
                                     </Link>
									 </li>
								</ul>
							</div>
						</div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg py-2 px-md-0">
				<div className="container container-adjust-width">
				  <Link className="navbar-brand" to="">
                      <img src="icon/logo.png" alt=""/>
                      </Link>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true">
                        </i>
                    </span>
				  </button>

				  <div className="collapse navbar-collapse collapse-bar" id="navbarSupportedContent">
				    <ul className="navbar-nav navmenu-nav ml-auto">
				      <li className="nav-item active">
				        <Link className="nav-link" to="/">HOME</Link>
				      </li>
				      <li className="nav-item dropdown">
				        <Link className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SERVICES</Link>
				        <ul class="dropdown-menu drop-service" aria-labelledby="navbarDropdown">
				          <li class="dropdown-item"><a href="#">Custom Research</a></li>
				          <li class="dropdown-item"><a href="#">Syndicate Research</a></li>
				          <li class="dropdown-item"><a href="#">Consulting Services</a></li>
				          <li class="dropdown-item"><a href="#">Report Automation</a></li>
				          <li class="dropdown-item"><a href="#">Dashboard</a></li>
				          <li class="dropdown-item"><a href="#">Subscription</a></li>
				        </ul>
				      </li>
				      <li className="nav-item dropdown">
				        <Link className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">OUR EXPERTISE</Link>
				        <ul class="dropdown-menu drop-service" aria-labelledby="navbarDropdown">
				          <li class="dropdown-item"><a href="#">Infographics</a></li>
				          <li class="dropdown-item"><a href="#">Business Strategy</a></li>
				          <li class="dropdown-item"><a href="#">Research Methodology</a></li>
				          <li class="dropdown-item"><a href="#">Forecasting</a></li>
				          <li class="dropdown-item"><a href="#">Pricing Analysis</a></li>
				          <li class="dropdown-item"><a href="#">S&D Analysis</a></li>
				        </ul>
				      </li>
				      <li className="nav-item dropdown">
				        <Link className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">INDUSTRIES</Link>
				        <ul class="dropdown-menu drop-service" aria-labelledby="navbarDropdown">
				          <li class="dropdown-item"><a href="#">Pharmaceutical & Therapeutics</a></li>
				          <li class="dropdown-item"><a href="#">Medical Imaging</a></li>
				          <li class="dropdown-item"><a href="#">Medical Device</a></li>
				          <li class="dropdown-item"><a href="#">Veterinary Healthcare</a></li>
				          <li class="dropdown-item"><a href="#">Healthcare IT</a></li>
				          <li class="dropdown-item"><a href="#">Nutrition & Feed</a></li>
				          <li class="dropdown-item"><a href="#">Clinical Diagnostic</a></li>
				          <li class="dropdown-item"><a href="#">Biotechnology</a></li>
				          <li class="dropdown-item"><a href="#">Cosmetics</a></li>
				        </ul>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to ="/about-us">ABOUT US</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to ="/contact-us">CONTACT US</Link>
				      </li>
				    </ul>
				    <form className="form-inline form-posit my-2  my-lg-0">
				      <input className="form-control pr-5" type="search" placeholder="Search Foster Market..." aria-label="Search"/>
				      <button className="btn p-0" type="submit"><img src="icon/search.png" alt=""/></button>
				    </form>
				  </div>
				</div>
			</nav>
         </header>
       </div>
   )
}

export default Header