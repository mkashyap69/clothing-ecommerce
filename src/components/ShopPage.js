import React from 'react';
import CollectionOverview from './CollectionOverview';
import CollectionPage from './CollectionPage';
import { Route, Switch } from 'react-router-dom';
import { firestore, convertSnapshotToMap } from '../firebase/firebase.util';
import updateCollections from '../redux/action/shop-action';
import { connect } from 'react-redux';
import WithSpinner from './WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collection');

    collectionRef.get().then( (snapshot) => {
      const collectionsMap =  convertSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={(props) => (
              <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:categoryId`}
            render={(props) => (
              <CollectionsPageWithSpinner isLoading={isLoading} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
