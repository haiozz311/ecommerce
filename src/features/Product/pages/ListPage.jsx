import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import productApi from '../../../API/productApi';
ListPage.propTypes = {
    
};

function ListPage(props) {
    const LeftBlock = styled('div')({
        width: '350px'
    })
     const RightBlock = styled('div')({
        flex: '1 1 auto'
     })
    useEffect(() => {
        (async() => {
            const respone = await productApi.getAll({ _page: 1, _limit: 10 });
            console.log({respone})
        })()
    },[])
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
                            <Paper elevation={0}>Right column</Paper>
                        </Grid>
                    </RightBlock>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;