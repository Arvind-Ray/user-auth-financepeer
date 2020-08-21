import axios from 'axios';
import actionTypes from '../../action-types';

export default () => ( dispatch ) => { 
    const url = `/api/posts/post`;
    const body = {};
    axios.post(url, body)
    .then(res => {
        dispatch({type: actionTypes.ON_GET_DATA, payload: res.data});
    })
    .catch(err => console.log("TODO: Handle error case in getdata page"));
};