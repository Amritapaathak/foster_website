import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Whoweare = () =>{
    return(
        <div>

<Header/>
           <section class="pt-100 pb-100 about-sec" style ={ { backgroundImage: "url(images/about-us.jpg)" } }>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="about--row">
					<h1 class="text-uppercase banner-heading text-white"> Who We Are</h1>
					<p class="text-white mb-0">We analyze the future <br/>in the <span class="text-yellow">present</span></p>
				</div>
			</div>
		</div>
	</div>
</section> 

<section class="pt-100 pb-100 about-sec" style ={ { backgroundImage: "url(images/sunset.jpg)" } }>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="about--row">
					<h1 class="text-uppercase banner-heading text-white" style={{textAlign:'center'}}> 
                         COMING SOON</h1>
					<p class="text-white mb-0"><br/> <span class="text-yellow"></span></p>
				</div>
			</div>
		</div>
	</div>
</section> 

           <Footer/>

        </div>
    )
}

export default Whoweare;