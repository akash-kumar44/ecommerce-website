import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai'

import {Cart} from './';
import { useStateContext } from '../context/StateContext';

const Navbar = ({supherbBanner}) => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();

  return (
    <div className="navbar-container">
      <p>
        <Link href="/"><img src="https://cdn.sanity.io/images/8apvqvxd/production/910cdff1e31f50787347f0a51284335db73d6a86-834x299.png" width="20%" alt="" className="logo" /></Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>

  )
}

export default Navbar 