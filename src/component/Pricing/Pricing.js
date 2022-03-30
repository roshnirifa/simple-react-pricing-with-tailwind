import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption
        = [
            {
                id: 1, name: 'Free', price: 0, benefits: [
                    'lifetime free',
                    'unlimited deals', 'fantastic deals',
                    'crazy deals'
                ]
            },
            {
                id: 2, name: 'Regular', price: 1000, benefits: [
                    'everything on regular',
                    'unlimited deals', 'fantastic deals',
                    'crazy deals'
                ]
            },
            {
                id: 3, name: 'Premium', price: 1700, benefits: [
                    'everything on free',
                    'unlimited deals', 'fantastic deals',
                    'crazy deals'
                ]
            },

        ]
    return (
        <div className='bg-indigo-200 p-4 mt-8'>
            <h1 className='text-6xl'>Best deal in the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nesciunt fugit reprehenderit voluptatibus quia facilis corrupti error unde aut quas!</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option => <PricingOption key={option.id}
                        option={option}></PricingOption>)
                }

            </div>
        </div>
    );
};

export default Pricing;