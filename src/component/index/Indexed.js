import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Slider from '../slider/Slider';
import Service from '../service/Service';
import Client from '../client/Client';
import Expertise from '../expertise/Expertise';
import Feedback from '../feedback/Feedback';
import Industry from '../industri/Industry';
import Security from '../security/Security';
import Companies  from '../companies/Companies';
import Reports from '../Reports/Reports';
const Index = () =>{

   return(
       <div>
           <Header/>
           <Slider/>
           <Service/>
           <Client/>
           <Expertise/>
           <Feedback/>
           <Industry/>
           <Security/>
           <Companies/>
           <Reports/>
           <Footer/>
       </div>
   )

}

export default Index;