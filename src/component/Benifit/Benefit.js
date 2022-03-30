import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = (props) => {

    return (
        <div>
            <p className='flex items-center'>
                <CheckCircleIcon className='h-4 w-4 text-green-500 mr-2'>
                </CheckCircleIcon>
                {props.benefit}
            </p>
        </div>
    );
};

export default Benefit;