import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'

import market from '../../assets/market.png'

import CartIcon from '../CartIcon/CartIcon';
import Cart from '../Cart/Cart';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import './Header.styles.scss'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="header__logo_container" to="/">
      <img src={market} alt="Logo" className="header__logo" />
    </Link>
    <div className="header__options">
      <Link className="header__option" to="/shop">SHOP</Link>
      <Link className="header__option" to="/shop">CONTACT</Link>
      {
        currentUser ?
          <div className="header__option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="header__option" to="/signin">SIGN IN</Link>

      }
      <CartIcon />
    </div>
    {hidden ? null : <Cart/>}
  </div>
);

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
