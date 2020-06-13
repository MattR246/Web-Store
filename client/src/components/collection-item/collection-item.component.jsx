import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { viewItem } from '../../redux/shop/shop.actions';

import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    AddButton,
    NameContainer,
    PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, viewItem, history, match, routeName }) => {
    const { name, price, imageUrl } = item;
    console.log('THIS', match);

    return (
        <CollectionItemContainer>
            <BackgroundImage
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>

            <Link to={`/product/${name}`}>
                <AddButton onClick={() => viewItem(item)} inverted>
                    View Item
                </AddButton>
            </Link>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    viewItem: item => dispatch(viewItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
