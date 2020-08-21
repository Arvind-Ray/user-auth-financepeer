import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {OnpostData, OngetPostData} from '../../actions';
import Layout from '../../components/Layout';
import CustomTable from '../../components/Table';
import { Button } from '@material-ui/core';

function HomePage({OnpostData, OngetPostData, getPostData, postData}) {
    const [value, setValue] = React.useState("");
    React.useEffect(() => {
        console.log("hello post")
        OngetPostData();
        
    });
    
    const onFileUpload = async () => { 
     
        // Create an object of formData 
        let formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "jsonFile", 
          value, 
          value.name 
        ); 
       
        // Details of the uploaded file 
        console.log(value); 
        await OnpostData(formData);
    }

    console.log(getPostData, "ravi");
    return(
        <Layout>
            <h1>Welcome to Financepeer below is the detail in table format!</h1>
            <input type="file"  onChange={(e) => setValue(e.target.files[0])}/>
            <Button onClick={onFileUpload}>Submit file</Button>
            <CustomTable />
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