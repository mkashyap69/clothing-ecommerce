import React,{useEffect} from 'react';
import './styles/App.css';
import { HomePage } from './HomePage';
import ShopPage from './ShopPage';
import SignInAndSignUpPage from './SignInAndSignUpPage';
import Header from './Header';
import CheckoutPage from './CheckoutPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../redux/selectors/user';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from '../redux/action/user-action';

const App=({ checkUserSession ,currentUser})=>  {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/sign-in"
            render={() =>
              //render is a type of component renderer inside which we can write javascript code
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
