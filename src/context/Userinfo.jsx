export default function set_user_info (dispatch, user){
    let create_user = {
        email: user?.email,
        name: user?.name,
        phone: user?.phone,
        metadata: user?.metadata,
        isAnonymous: user?.isAnonymous,
        emailVerified: user?.emailVerified,
    }

    dispatch({
        type: 'set_user',
        payload: { ...create_user}
    })

    if(user?.email){
        dispatch({ type: 'set_authenticated'})
    }

}