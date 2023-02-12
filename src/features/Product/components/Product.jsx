import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import {STATIC_HOST, THUMBNAIL_DEFAULT} from '../../../constants/common'

Product.propTypes = {
    
};

function Product(product) {
    const thumbnail = product?.product?.thumbnail ? `${STATIC_HOST}${product?.product?.thumbnail?.url}` : `${THUMBNAIL_DEFAULT}` 
    return (
        <Box padding={1}>
            <img src={thumbnail} 
                alt={product?.product?.name}
                width="100%"
            />
            <Typography variant='body2'>{product.product.name}</Typography>
            <Grid container>
            <Typography variant='body2' style={{textDecoration: 'line-through'}}>{product.product.originalPrice}</Typography>
                <Grid item>
            </Grid>
            <Grid item px={2}>
                <Typography variant='body2'>{product.product.salePrice}</Typography>
            </Grid>
            </Grid>
            <Typography variant='body2'>{product.product.promotionPercent}</Typography>

        </Box>
    );
}

export default Product;