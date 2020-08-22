import axios from 'axios';
import actionTypes from '../../action-types';

export default (formData) => ( dispatch ) => { 
    const url = `/api/posts/newPost`;
    axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data'} })
    .then(res => {
        dispatch({type: actionTypes.ON_POST_DATA, payload: res.data});
    })
    .catch(err => console.log("TODO: Handle error case in postData page"));
};