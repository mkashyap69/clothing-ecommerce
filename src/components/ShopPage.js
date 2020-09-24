import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../redux/action/shop-action';

import CollectionOverviewContainer from '../components/containers/CollectionOverview.container';
import CollectionPageContainer from '../components/containers/CollectionPage.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />

          <Route
            path={`${match.path}/:categoryId`}
            component={CollectionPageContainer}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
