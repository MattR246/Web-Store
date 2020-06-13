import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { viewItem } from '../../redux/shop/shop.actions';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <Link
                        onClick={() => viewItem(item)}
                        to={`/product/${
                            collection.routeName
                        }/${item.name.replace(/\s/g, '')}`}
                        key={item.id}
                    >
                        <CollectionItem item={item} />
                    </Link>
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const mapDispatchToProps = dispatch => ({
    viewItem: item => dispatch(viewItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
