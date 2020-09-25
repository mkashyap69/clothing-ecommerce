import React, { useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../redux/action/shop-action';

import CollectionOverviewContainer from '../components/containers/CollectionOverview.container';
import CollectionPageContainer from '../components/containers/CollectionPage.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
