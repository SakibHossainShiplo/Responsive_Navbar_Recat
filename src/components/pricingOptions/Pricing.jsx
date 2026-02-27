import React, { use } from 'react';
import PricingCard from './PricingCard';




const Pricing = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
   
    return (
        <div>
            <h2 className='text-4xl'> Get our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    pricingData.map(Pricing => <PricingCard key={Pricing.id}Pricing={Pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;
    
