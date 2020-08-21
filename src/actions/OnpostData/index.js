import axios from 'axios';
import actionTypes from '../../action-types';

export default (fileData) => ( dispatch ) => { 
    console.log(fileData, "why thisd data")
    const url = `/api/posts/newPost`;
    axios.post(url, fileData)
    .then(res => {
        dispatch({type: actionTypes.ON_POST_DATA, payload: res.data});
    })
    .catch(err => console.log("TODO: Handle error case in postData page"));
};