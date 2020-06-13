import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addItem } from '../../redux/cart/cart.actions';
import { selectItemToView } from '../../redux/shop/shop.selectors';

import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    AddButton,
    NameContainer,
    PriceContainer,
} from './product.styles';

const ProductPage = ({ itemToView, addItem }) => {
    //if itemToView === null then itemToView = match.params.routename, match.params.item
    const { name, price, imageUrl } = itemToView;
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
            <AddButton onClick={() => addItem(itemToView)} inverted>
                Add Item
            </AddButton>
        </CollectionItemContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    itemToView: selectItemToView,
});

const mapDispatchToProps = dispatch => ({
    addItem: itemToView => dispatch(addItem(itemToView)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
