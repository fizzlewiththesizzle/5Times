import React from 'react';
import { BounceLoader } from 'react-spinners';

function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center flex items-center flex-col">
                <BounceLoader color={'#10b981'} size={64} />
                <h1 className='dark:text-white text-4xl font-bold mt-4'>5Times</h1>
            </div>
        </div>
    );
}

export default Loading;
