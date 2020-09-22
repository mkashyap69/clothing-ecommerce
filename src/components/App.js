import React from 'react';
import './styles/App.css';
import { HomePage } from './HomePage';
import ShopPage from './ShopPage';
import SignInAndSignUpPage from './SignInAndSignUpPage';
import Header from './Header';
import CheckoutPage from './CheckoutPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDoc } from '../firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/action/user-action';
import { selectCurrentUser } from '../redux/selectors/user';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
//using fetch for one time calls
    /* fetch(
      'https://firestore.googleapis.com/v1/projects/clothing-ecommerce-9d48b/databases/(default)/documents/collection}'
    )
      .then((response) => response.json())
      .then((collections) => console.log(collections)); */

    //observer and observable pattern, subscribing to a series of events called observable using observer
    //this pattern gives regular updates whenever something changes, in promise pattern call is made only once, there is no subscription
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });

    /*  addCollectionAndDocuments(
      'collection',
      collectionArray.map(({ title, items }) => ({ title, items }))
    ); */
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
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
              this.props.currentUser ? (
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
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
