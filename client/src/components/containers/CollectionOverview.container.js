import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionIsFetching } from '../../redux/selectors/shop_data';
import WithSpinner from '../WithSpinner';
import CollectionsOverview from '../CollectionOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
