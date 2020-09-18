import React from 'react';
import './styles/cart-icon.styles.scss';
import { toggleCartHidden } from '../redux/action/cart-action';
import { connect } from 'react-redux';
import { selectCartItemsQuantity } from '../redux/selectors/cart';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsQuantity(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
