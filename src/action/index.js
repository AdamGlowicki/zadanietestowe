import axios from 'axios'

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const SORT = 'SORT';

export const fetchItems = () => (dispatch) => {
    dispatch({ type: FETCH_REQUEST });

    return axios
        .get('https://recruitment.hal.skygate.io/companies')
        .then(({ data }) => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: {
                    data,
                },
            });
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: FETCH_FAILURE });
        });
};

export const sort = (order) => (dispatch) => {
    return (
        dispatch({
            type: SORT,
            payload: {
                order: order,
            }
        })
    )
}
