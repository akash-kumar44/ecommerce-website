import React from 'react' ;
import Link from 'next/link';

import { urlFor } from '../lib/client';

const SupherbBanner = ({supherbBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{supherbBanner.smallText}</p>
        <h3>{supherbBanner.midText}</h3>
        <h1>{supherbBanner.largeText1}</h1>
        <img src={urlFor(supherbBanner.image)}  alt="henna" className='hero-banner-image'/>

       <div>
        <Link href={`/product/${supherbBanner.product}`}>
          <button type='button'>{supherbBanner.buttonText}</button></Link></div> 
          <div className="desc">
            <h5>Description</h5>
            <p>{supherbBanner.desc}</p>
          </div>
      </div>
    </div>
  )
}

export default SupherbBanner