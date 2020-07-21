import React from 'react';
import './Client.css';


const Client = () =>{
   
    return(
        <div>
           <section className="primary-bg py-4 exis-section">
	<div className="container">
		<div className="row">
			<div className="col-12">
				<div className="heading--bar text-center pb-4">
					<h2 className="title-head text-yellow text-uppercase mb-4">Existing Clientele</h2>
					<p className="parg-disc text-white">Joining thousands of companies around the world committed to making the Excellent Business Solutions </p>
				</div>
			</div>
			<div className="col-12 px-5">
				<div id="demo" className="carousel slide" data-ride="carousel">
				  {/* <!-- The slideshow --> */}
				  <div className="carousel-inner">
				    <div className="carousel-item active">
				      <ul className="client-exis d-flex flex-wrap justify-content-center">
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/siem.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/covidien.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/johnson.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/nihon.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/mckensey.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/carefuse.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/medtonic.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/fisher.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/get-health.jpg" alt="" /></div></li>
					</ul>
				    </div>
				    <div className="carousel-item">
				      <ul className="client-exis d-flex flex-wrap justify-content-center">
						
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/nihon.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/mckensey.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/carefuse.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/medtonic.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/fisher.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/get-health.jpg" alt="" /></div></li>
                        <li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/siem.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/covidien.jpg" alt="" /></div></li>
						<li className="list-client-logo"><div className="lg-img-list">
                            <img src="images/johnson.jpg" alt="" /></div></li>
					</ul>
				    </div>
				  </div>
				  {/* <!-- Left and right controls --> */}
				  <a className="carousel-control-prev exist-prev" href="#demo" data-slide="prev">
				    <span className="carousel-control-prev-icon"></span>
				  </a>
				  <a className="carousel-control-next exist-next" href="#demo" data-slide="next">
				    <span className="carousel-control-next-icon"></span>
				  </a>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    )
}

export default Client;