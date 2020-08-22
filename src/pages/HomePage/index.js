import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {OnpostData, OngetPostData} from '../../actions';
import Layout from '../../components/Layout';
import CustomTable from '../../components/Table';
import { Button } from '@material-ui/core';

function HomePage({OnpostData, OngetPostData, getPostData, postData}) {
    const [file, setFile] = React.useState('');

    React.useEffect(() => {
        OngetPostData();
    },[])

    const onChange = e => {
        setFile(e.target.files[0]);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        await OnpostData(formData);

    };

    return(
        <Layout>
            <h1>Welcome to Financepeer below is the detail in table format!</h1>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onChange} />
                <Button type='submit' value='Upload' variant="contained"  color="secondary">Submit file</Button>
            </form>
            <CustomTable 
                data= {getPostData && getPostData.data}
            />
        </Layout>
    )

}
HomePage.propTypes = {
    demo: PropTypes.object,
};

function mapStateToProps(state) {
    const { postData, getPostData } = state;
    return {
     postData,
     getPostData
    }
  };
  export default connect(mapStateToProps, {
   OnpostData,
   OngetPostData
  })(HomePage); 