import React from 'react';
import CollectionOverview from './CollectionOverview';
import CollectionPage from './CollectionPage';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
