import React from 'react';
import './Feedback.css';

const Feedback = () =>{
    return(
        <div>
 <section className="rcent-section primary-bg py-5">
	<div className="container container-adjust-width">
		<div className="row">
			<div className="col-12">
				<div className="heading--bar text-center pb-4">
					<h6 className="text-white">What People Think About us</h6>
					<h2 className="title-head text-uppercase text-white">Recent Feedback</h2>
				</div>
			</div>
			<div className="col-12">
				<div className="owlcarousel-slider">
					<div className="owl-carousel slider-owlbox">
			            <div className="item">
			              <div className="recnt-box-sec">
			              	<div className="feed-box">
			              		<span className="icon-feedback yellow-bg">
                                      <img src="icon/user.png" alt=""/></span>
			              		<h5 className="title-name">John Doe 1</h5>
			              		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			              	</div>
			              </div>
			            </div>
			            <div className="item">
			              <div className="recnt-box-sec">
			              	<div className="feed-box">
			              		<span className="icon-feedback yellow-bg">
                                      <img src="icon/user.png" alt=""/></span>
			              		<h5 className="title-name" style={{color:'red'}}>John Doe 2</h5>
			              		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			              	</div>
			              </div>
			            </div>
			            <div className="item">
			              <div className="recnt-box-sec">
			              	<div className="feed-box">
			              		<span className="icon-feedback yellow-bg">
                                      <img src="icon/user.png" alt=""/></span>
			              		<h5 className="title-name">John Doe 3</h5>
			              		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			              	</div>
			              </div>
			            </div>
			            <div className="item">
			              <div className="recnt-box-sec">
			              	<div className="feed-box">
			              		<span className="icon-feedback yellow-bg">
                                      <img src="icon/user.png" alt=""/></span>
			              		<h5 className="title-name">John Doe 4</h5>
			              		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

export default Feedback;