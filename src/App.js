import React from 'react';

import Login from './component/login/Login';
import {
  Switch,
  Route,
 
} from "react-router-dom";
import Register from './component/register/Register';
import Indexed from './component/index/Indexed';
import Abouts from './component/abouts/Abouts';
import Sevices from './component/services/Services';
import Services from './component/services/Services';
import Expertises from './component/expertises/Expertises'; 
import Industries from './component/industries/Industries';
import Contact from './component/contact/Contact';
import TermsConditions from './component/termsConditions/TermsConditions';
import PrivacyPolicy from './component/privacyPolicy/PrivacyPolicy';
import Disclaimer from './component/disclaimer/Disclaimer';
import Returnpolicy from './component/returnPolicy/Returnpolicy';
import Subscription from './component/subscription/Subscription';
import Whyfoster from './component/Whyfoster/Whyfoster';
import Whoweare from './component/Whoweare/Whoweare';
import OurGlobalReach from './component/OurGlobalReach/OurGlobalReach';
import Customresearch from './component/customresearch/Customresearch';
import Syndicateresearch from './component/syndicateresearch/Syndicateresearch';
import Consultingservices from './component/consultingservices/Consultingservices';
import Reportautomation from './component/reportautomation/Reportautomation';
import Dashboard from './component/dashboard/Dashboard';


function App() {
  return (
    <div>
      <Switch>
      <Route path='/register' exact component={Register} />
      <Route path='/' exact component={Indexed} />
      <Route path='/login' exact component={Login} />
      <Route path='/about-us' exact component={Abouts} />
      <Route path="/services" exact component={Services} />
      <Route path="/expertises" exact component={Expertises} />  
      <Route path="/industries" exact component={Industries} /> 
      <Route path="/contact-us" exact component={Contact} />
      <Route path="/privacy-policy" exact component={PrivacyPolicy} />
      <Route path="/terms-conditions" exact component={TermsConditions} /> 
      <Route path="/disclaimer" exact component={Disclaimer} />
      <Route path="/return-policy" exact component={Returnpolicy} />
      <Route path="/subscription" exact component={Subscription} />
      <Route path="/why-foster" exact component={Whyfoster} />
      <Route path="/who-we-are" exact component={Whoweare} />
      <Route path="/our-global-reach" exact component={OurGlobalReach} />
      <Route path="/customre-search" exact component={Customresearch} />
      <Route path="/syndicate-research" exact component={Syndicateresearch} />
      <Route path="/consulting-services" exact component={Consultingservices} />
      <Route path="/report-automation" exact component={Reportautomation} />
      <Route path="/dashboard" exact component ={Dashboard} />
      
      
      
        </Switch>
     
  </div>
  );
}

export default App;
