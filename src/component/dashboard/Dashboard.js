
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Dashboard = () =>{
    
    return(
        <div>
            <Header/>
         
         
<section class="pt-100 pb-100 about-sec"
 
 style ={ { backgroundImage: "url(images/dashboard-bg.jpg)" } }>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="about--row">
					<h1 class="text-uppercase banner-heading text-white text-uppercase">Dashboard</h1>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="my-5 py-4 comn-position-bg" 

style ={ { backgroundImage: "url(images/dash-cover.jpg" } }>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="max-content">
					<p class="parg-disc">Based on various metrics, we build a custom dashboard to identify every opportunity that can help you reduce cost and improve work efficiency. Our customizable dashboard equips various features to help our clients to easily relate to our technologies. Adaptable features, modification done easy, understandable, are some features that set it apart.</p>
					<p class="parg-disc">We help you to create excellent data reports and effectively communicate the data insights with attractive charts and graphs. Combining these metrics with proper visualizations, we save your time and effort in all data related tasks from gleaning data to processing high level data functionality.  More understandable the visualization the more easy is for it to understand.</p>
					<h5 class="mt-5">Some Key Features in Our Dashboard-</h5>
					<div class="inside-list pl-3">
						<ul class="list--col">
							<li class="point-list">Easily customizable</li>
							<li class="point-list">Storage of purchased reports at a single point</li>
							<li class="point-list">Competitive analysis (continuous basis)</li>
							<li class="point-list">Strategic advancement</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="pt-100 pt-4 pb-100 max-section">
	<div class="container">
		<div class="row">
			<div class="col-12 col-md-10">
				<div class="max-content">
					<h3 class="title-insid">Easily Customizable:</h3>
					<p class="parg-disc">Our dashboard is easily customizable according to our client’s need. Henceforth is adaptable according to a required set of strategy and can be easily modified to a particular need. We offer various customization tools for you to choose which add value to your project.</p>
					<h3 class="title-insid">Storage of Purchased Report at a Single Point:</h3>
					<p class="parg-disc">All your purchased reports are safely stored with our level of security and is easily accessible by you at any point of time. The reports purchased are downloadable at any fraction of period and is shareable in multiple supported platforms.</p>
					<h3 class="title-insid">Competitive Analysis:</h3>
					<p class="parg-disc">A continuous analysis on competitive market is made on a regular basis and is presented with charts and graphs in our dashboard, providing our clients with the competitive knowledge of current market.</p>
					<h3 class="title-insid">Strategic Advancement:</h3>
					<p class="parg-disc">Our dashboard provide robust and extensive statistical studies of market segment in different regions as well as critical data on different competitive organizations which are upgrade on quarterly basis. This enable our clients to improve their current strategic positions with better business opportunity in different geographies.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer/>
        </div>
    )
}

export default Dashboard;