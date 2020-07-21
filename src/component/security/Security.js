import React from 'react';
import './Security.css';

const Security = () =>{
    return(
        <div>
           <section class="status-bg py-5">
	<div class="container">
		<div class="row align-items-end">
			<div class="col-12 col-md-6 col-lg-3">
				<div class="update-total fst-color text-center">
					<span class="stauts-comn">Security</span>
					<h3 class="perc-head">65%</h3>
					<div class="percent-img"><img src="images/status-1.png" alt=""/></div>
					<span class="stauts-comn-btn">Secure</span>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="update-total scnd-color text-center">
					<span class="stauts-comn">Dashboard</span>
					<h3 class="perc-head">64%</h3>
					<div class="percent-img"><img src="images/status-2.png" alt="" /></div>
					<span class="stauts-comn-btn">Updated</span>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="update-total thrd-color text-center">
					<span class="stauts-comn">24/7 Support</span>
					<h3 class="perc-head">63%</h3>
					<div class="percent-img"><img src="images/status-3.png" alt="" /></div>
					<span class="stauts-comn-btn">Satisfied</span>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="update-total fort-color text-center">
					<span class="stauts-comn">Report Uptime</span>
					<h3 class="perc-head">65%</h3>
					<div class="percent-img"><img src="images/status-4.png" alt="" /></div>
					<span class="stauts-comn-btn">All most</span>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    )
}

export default Security;