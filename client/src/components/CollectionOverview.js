import React from 'react';
import PreviewCollection from './PreviewCollection';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../redux/selectors/shop_data';
import { createStructuredSelector } from 'reselect';
import './styles/collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
