import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';

function LoginPage() {

    return(
        <Layout>
            <h1>Welcome to Financepeer for more detail please Login</h1>
        </Layout>
    );
}

LoginPage.propTypes = {
    demo: PropTypes.object,
};
export default LoginPage;