import React from 'react'

import { client } from '../lib/client';
import{SupherbBanner, FooterBanner, Product} from '../components'
const Home = ({products, bannerData}) => (
    <div>
    <SupherbBanner supherbBanner={bannerData.length && bannerData[0]}/>

    <div id="prdct" className="products-heading">
      <h2>Pure Herbal Products</h2>
      <p>Everything is best and pure</p>
    </div>

    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner = {bannerData && bannerData[0]}  />
    </div>
);

export const getServerSideProps = async () =>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData}
  }
}

export default Home