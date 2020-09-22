import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionIsFetching } from '../../redux/selectors/shop_data';
import WithSpinner from '../WithSpinner';
import CollectionsPage from '../CollectionPage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching,
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage);

export default CollectionsPageContainer;
