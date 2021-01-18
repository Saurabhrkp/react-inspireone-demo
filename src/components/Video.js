import React from 'react';

import './Video.css';

const Video = () => {
  return (
    <>
      <div className='col-lg-6 col-md-6 col-12 mb-5 mb-lg-0'>
        <h1 className='text-uppercase'>
          Businesses are doubling down on Gamification & Game-based learning in
          2021!
        </h1>
        <div className='p-4'>
          <div className='ratio ratio-1x1 shadow-lg'>
            <iframe
              src={`${process.env.PUBLIC_URL}/animation1.mp4`}
              title='animation'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
