export default function set_auth_error (dispatch, error){
    dispatch({type: 'set_error', payload: error});

    setTimeout(() => {
        dispatch({ type: 'reset_error'})
    }, 9000);
}
