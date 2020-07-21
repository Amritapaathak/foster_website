import React from 'react';
import './Feedback.css';

const Feedback = () =>{
    return(
        <div>
 <section class="rcent-section primary-bg py-5">
	<div class="container container-adjust-width">
		<div class="row">
			<div class="col-12">
				<div class="heading--bar text-center pb-4">
					<h6 class="text-white">What People Think About us</h6>
					<h2 class="title-head text-uppercase text-white">Recent Feedback</h2>
				</div>
			</div>
			<div class="col-12">
				<div class="owlcarousel-slider">
					<div class="owl-carousel slider-owlbox">
			            <div class="item">
			              <div class="recnt-box-sec">
			              	<div class="feed-box">
			              		<span class="icon-feedback yellow-bg">
                                      <img src="icon/user.png" alt=""/></span>
			              		<h5 class="title-name">John Doe 1</h5>
			              		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			              	</div>
			              </div>
			            </div>
			            <div class="item">
			              <div class="recnt-box-sec">
			              	<div class="feed-box">
			              		<span class="icon-feedback yellow-bg">
                                      <img src="icon/user.png" alt=""/></span>
			              		<h5 class="title-name" style={{color:'red'}}>John Doe 2</h5>
			              		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			              	</div>
			              </div>
			            </div>
			            <div class="item">
			              <div class="recnt-box-sec">
			              	<div class="feed-box">
			              		<span class="icon-feedback yellow-bg">
                                      <img src="icon/user.png" alt=""/></span>
			              		<h5 class="title-name">John Doe 3</h5>
			              		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			              	</div>
			              </div>
			            </div>
			            <div class="item">
			              <div class="recnt-box-sec">
			              	<div class="feed-box">
			              		<span class="icon-feedback yellow-bg">
                                      <img src="icon/user.png" alt=""/></span>
			              		<h5 class="title-name">John Doe 4</h5>
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