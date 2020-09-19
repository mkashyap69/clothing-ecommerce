import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShopData = (state) => state.shop_data;

export const shopDataCollections = createSelector(
  [selectShopData],
  (shop_data) => shop_data.collections
);

export const selectCollectionsForPreview = createSelector(
  [shopDataCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]) //converting objects into array
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [shopDataCollections],
    (collections) => collections[collectionUrlParam]
  )
);
