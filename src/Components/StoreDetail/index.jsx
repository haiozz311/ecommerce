import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet, useParams } from 'react-router-dom';

StoreDetail.propTypes = {
    
};

function StoreDetail(props) {
    const { storeId } = useParams();
    console.log('params', storeId);
    return (
        <div>
            StoreDetail page {storeId}
            <Outlet/>
        </div>
    );
}

export default StoreDetail;