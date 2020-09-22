import React from 'react';
import CollectionOverview from './CollectionOverview';
import CollectionPage from './CollectionPage';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import WithSpinner from './WithSpinner';
import { fetchCollectionsAsync } from '../redux/action/shop-action';
import { createStructuredSelector } from 'reselect';
import { selectCollectionIsFetching } from '../redux/selectors/shop_data';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  render() {
    const { match, isLoading } = this.props;

    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={(props) => (
              <CollectionsOverviewWithSpinner
                isLoading={isLoading}
                {...props}
              />
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

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
