import React from 'react';
import Feature from './Feature';
import { Key } from 'lucide-react';
import { Features } from 'tailwindcss';

const PricingCard = ({Pricing}) => {
    // console.log(Pricing)
    const{name, price, description, features,popular} =Pricing
    return (
        <div className='shadow rounded-2xl p-3 flex flex-col'>
            {/* top card  */}
           
            <div>
                 {popular &&<span className='bg-amber-500 p-2 rounded-full text-1xl'>Most PoPular</span>}
            <h1 className='text-5xl'>{name}</h1>
            <h1 className='text-2xl'>{price}</h1>
            </div>
            {/* mudail card  */}
            <div className='flex-1 shadow rounded-2xl p-2'>
                <p>
                    {description}
                   {
               features.map((feature, index)=> 
                    <Feature  Key ={index} feature={feature}></Feature>)
                   }
                </p>
            </div>
            {/* laste card  */}
            <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;