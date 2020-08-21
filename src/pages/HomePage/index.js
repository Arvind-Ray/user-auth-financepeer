import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import CustomTable from '../../components/Table';

function HomePage() {
    return(
        <Layout>
            <h1>Welcome to Financepeer below is the detail in table format!</h1>
            <CustomTable />
        </Layout>
    )

}
HomePage.propTypes = {
    demo: PropTypes.object,
};

export default HomePage;