import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import productApi from '../../../API/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
ListPage.propTypes = {
    
};

function ListPage(props) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const LeftBlock = styled('div')({
        width: '350px'
    })
     const RightBlock = styled('div')({
        flex: '1'
     })
    useEffect(() => {
        (async () => {
        try {
            const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
            setProductList(data);
        } catch (error) {
            console.log('failed to fetch data')
            }
            setLoading(false);
        })()
    }, [])
    useEffect(() => {
        console.log('productList', productList);
    },[productList])
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <LeftBlock>
                        <Grid item >
                            <Paper elevation={0}>Left column</Paper>
                        </Grid>
                    </LeftBlock>
                    <RightBlock>
                        <Grid item >
                            <Paper elevation={0}>
                                {
                                    loading ? <ProductSkeletonList /> : <ProductList data={productList} />
                                }
                            </Paper>
                        </Grid>
                    </RightBlock>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;