import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../redux/selectors/shop_data';
import CollectionItem from './CollectionItem';
import './styles/collection.styles.scss';

const CollectionPage = ({  collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
