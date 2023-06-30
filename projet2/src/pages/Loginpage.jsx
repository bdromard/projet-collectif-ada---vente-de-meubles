import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Loginform from '../components/Loginform';
import Loginbg from '../assets/Loginbg.jpg'
import Subsciptionform from '../components/Subscriptionform';

const Loginpage = () => {
    return (
        <div>
            <Header/>
            <div className="flex">
            <div className="w-1/2">
  <div
    className="bg-rose-100">
    <div className="h-screen flex justify-center items-center">
      <div className="min-w-[450px] px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-medium">Register</h2>
          <p>Create your account. It's free and only take a minute</p>
        </div>
        <Subscriptionform />
      </div>
    </div>
  </div>
</div>

  <div className="w-1/2">
    <div className="h-screen flex justify-center items-center">
    <div className="bg-rose-100 bg-cover bg-no-repeat mt-7" style={{backgroundImage: `url(${Loginbg})`}}>
      <div className="min-w-[450px] px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-medium">Welcome Back!</h2>
          <p>Please enter your credentials to Sign In</p>
        </div>
        <Loginform />
      </div>
    </div>
    </div>
  </div>
</div>

            <Footer/>
        </div>
    );
};

export default Loginpage;