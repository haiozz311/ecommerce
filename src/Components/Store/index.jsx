import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

Store.propTypes = {
    
};

export const dataStore = [{
    name: 'store 1',
    id: 1,
},
{
    name: 'store 2',
    id: 2,
    },
{
    name: 'store 3',
    id: 3,
}]

function Store(props) {
    return (
        <div>
            Store page
            {
                dataStore.map(item => (
                    <>
                        <Link to={`${item.id}`} key={item.id}>{item.name}</Link>
                        <br />
                    </>
                ))
            }
            <Outlet />
        </div>
    );
}

export default Store;