import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { viewItem } from '../../redux/shop/shop.actions';

import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    AddButton,
    NameContainer,
    PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, viewItem }) => {
    const { name, price, imageUrl } = item;

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
            <AddButton onClick={() => viewItem(item)} inverted>
                View Item
            </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    viewItem: item => dispatch(viewItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
