import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import { viewItem } from '../../redux/shop/shop.actions';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <TitleContainer
            onClick={() => history.push(`${match.path}/${routeName}`)}
        >
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <Link
                        onClick={() => viewItem(item)}
                        to={`/product/${routeName}/${item.name.replace(
                            /\s/g,
                            ''
                        )}`}
                        key={item.id}
                    >
                        <CollectionItem item={item} />
                    </Link>
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

const mapDispatchToProps = dispatch => ({
    viewItem: item => dispatch(viewItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionPreview));
