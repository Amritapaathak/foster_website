import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Disclaimer = () =>{
    return(
        <div>

<Header/>
           <section class="pt-100 pb-100 about-sec" style ={ { backgroundImage: "url(images/disclaimer-bg.jpg)" } }>
           <div class="container">
		<div class="row">
			<div class="col-12">
				<div class="about--row">
					<h1 class="text-uppercase banner-heading text-white text-uppercase">Disclaimer</h1>
				</div>
			</div>
		</div>
	</div>
</section> 
<section class="pt-5 pb-5 max-section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="max-content">
					<p class="parg-disc bl-point">The data given as a piece of the report depends mostly on the perspectives given by our essential respondents and industry specialists, and consultants, thus, is subject to alterable. Henceforth, Foster Market Research doesn't assume any liability for inaccurate data provided to us by the business personnel</p>
					<p class="parg-disc bl-point">The facts and figures provided as a piece of the services offered by Foster Market Research, are intended for client's internal purpose and not for unveiling it to outsiders or general distribution. </p>
					<p class="parg-disc bl-point">The report may not be duplicated, rented, sold or partook to some degree or in full to third party,  not secured inside the terms and conditions expressed, without the unequivocal consent of Foster Market Research. </p>
					<p class="parg-disc bl-point">Besides, no segment of the report/infographic/article/blog/other realistic data might be imitated, or transmitted in any structure or using any other means, electronic, copying, mechanical, recording or in any case without lawful assent of Foster Market Research. </p>
					<p class="parg-disc bl-point">All facts, figures, statistics or research demonstrate in report/infographic/article/blog/other realistic data are those of the respective consultants or experts. They don't basically reproduce formal positions or perspectives of Foster Market Research. While each part of the market being referred to have been deliberately thought of and investigated while producing the report and anticipating the course of the market in the foreseen future, the equivalent can't be viewed as any assurance of the real change in elements of the market in future. Foster in this manner, isn't subject for any choices whether short-or long haul dependent on the reports offered by it. The purchaser accepts total accountability for all suspicions made that depends on the report.</p>
					<p class="parg-disc bl-point">Information provided by Foster is reliable and accurate. Our analysts and team of experts takes pride in providing you with the most accurate data possible. The data visible on the website is based on technical and demanding basis however is based through human research, thus Foster does not guarantee about the content currently on the website. Reports may contain some flaws but will still try to provide you with the most accurate reports possible.</p>
					<p class="parg-disc bl-point">We use data through some of the other popular websites to give you the most optimal results but we do not guarantee its reliability and accuracy and henceforth are not liable to any damage you sustain through these websites.</p>
					<p class="parg-disc bl-point">Data you gain from us is most accurate but we do not take any responsibility if you incur any loss through it. Nor Foster or its associates will be bound to any legalities if you come forth in these terms.</p>
				</div>
			</div>
		</div>
	</div>
</section>
           <Footer/>

        </div>
    )
}

export default Disclaimer;