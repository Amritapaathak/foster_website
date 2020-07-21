import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';


const Abouts = () =>{

    return(
        <div>
            <Header/>
            <section class="pt-100 pb-100 about-sec" style ={ { backgroundImage: "url(images/about-us.jpg)" } }>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="about--row">
					<h1 class="text-uppercase banner-heading text-white">About US</h1>
					<p class="text-white mb-0">We analyze the future <br/>in the <span class="text-yellow">present</span></p>
				</div>
			</div>
		</div>
	</div>
</section> 
<section class="pt-100 pb-100 ab-foster-sec">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="fl-about--fost">
					<p>Foster Market Research is a global market intelligence and advisory firm engaged in providing data-driven research extract from rigorous analysis, to the clients to make critical business decisions and execute them successfully. We deal in various major verticals with clients all across the world. Foster connects over numerous markets and various distribution channels for great understanding of the trends and market to deliver our clients with accurate data.</p>
					<p>Our focus is on providing market research that delivers a positive impact on your business. We work continuously to provide our clients with the most accurate analytics data and research reports without any delay so as to improve their business strategies and provide them with rich customer experience. We provide syndicate and customized statistical research reports that help our customers make visionary development intended to give footing to their business with transformational growth. We assist customers with settling on educated business choices. We offer market insight studies ensuring relevant and fact-based research across a range of industries.</p>
					<p>Foster Market Research amalgamates a comprehensive industrial analysis with the most precise estimations and speculations. We process raw data that we gather from our trusted sources and present only the best results so that our readers gain maximum and accurate understanding of their industry, the factors surrounding it, and further use this information for practical and accurate business planning.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="py-5 other-sec" style ={ { backgroundImage: "url(images/form-other.jpg)" } }>
	<div class="container">
		<div class="row">
			<div class="col-12 col-lg-6">
				<div class="other-propty">
					<h3 class="text-yellow title-head mb-4">What Differentiate Us From Others?</h3>
					<p class="parg-disc text-white">Our fully analyzed reports, experience analytics team, dedicated consultants, and our sales and customer support staff ensure our clients with the best customer experience which sets us apart from others. Price structure for membership which can be modified according to an individual or business needs can define our aim of customer satisfaction.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="pt-100 pb-100 employee-sec">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-md-6">
				<div class="">
					<img src="images/employee.jpg" />
				</div>
			</div>
			<div class="col-md-6">
				<div class="empoyee-content">
					<h3 class="title-head mb-4">Employee Management</h3>
					<p class="parg-disc">Our advanced employee development programs help our employees to break their own chains and reach far greater heights by developing new skills and bringing out their latent abilities to generate new sets of strategies and techniques. This aid Foster Market Research to gain a step ahead over the market. Our recruitment program employs talented candidates with ability to push forward and experience to utilize those abilities.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="pt-100 goal-section" style ={ { backgroundImage: "url(images/sunset.jpg)" } }>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="com-goal mt-5">
					<h3 class="title-head mb-4">Our Aim</h3>
					<p class="parg-disc">Our priority is to provide you with accurate decipher of the industry growth that help you to take strategic steps towards business expansion. We thrive to provide a firm grip to an organization or an individual over the market with the help of our data, reports and techniques. The more industries accomplish the targets, the more we get closer to our aim.</p>
				</div>
				<div class="com-goal mt-5">
					<h3 class="title-head mb-4">Our End Goal</h3>
					<p class="parg-disc">Is to help our client to adapt to the best possible strategies and implement them accordingly, and also introduce them to the best distribution route to help them increase their products sales in different economies with higher revenue.</p>
				</div>
			</div>
		</div>
	</div>
</section>
            <Footer/>
        </div>
    )

}

export default Abouts;