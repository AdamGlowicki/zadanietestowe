import axios from 'axios'

export const FETCH_COMPANIES_REQUEST = 'FETCH_COMPANIES_REQUEST';
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS';
export const FETCH_COMPANIES_FAILURE = 'FETCH_COMPANIES_FAILURE';

export const FETCH_INCOME_REQUEST = 'FETCH_INCOME_REQUEST';
export const FETCH_INCOME_SUCCESS = 'FETCH_INCOME_SUCCESS';
export const FETCH_INCOME_FAILURE = 'FETCH_INCOME_FAILURE';

export const SORT = 'SORT';
export const CLOSE= 'CLOSE'

export const fetchItems = () => (dispatch) => {
    dispatch({ type: FETCH_COMPANIES_REQUEST });

    return axios
        .get('https://recruitment.hal.skygate.io/companies')
        .then(({ data }) => {
            dispatch({
                type: FETCH_COMPANIES_SUCCESS,
                payload: {
                    data,
                },
            });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_COMPANIES_FAILURE });
        });
};

export const sort = (order) => (dispatch) => {
    return (
        dispatch({
            type: SORT,
            payload: {
                order,
            }
        })
    )
}

export const getSpecifyIncome = (id) => dispatch => {
    dispatch({ type: FETCH_INCOME_REQUEST });

    return axios
        .get(`https://recruitment.hal.skygate.io/incomes/${id}`)
        .then(({data}) => {
            dispatch({
                type: FETCH_INCOME_SUCCESS,
                payload: {
                    incomes: data.incomes,
                },
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_INCOME_FAILURE });
        });
}

export const closeWindow = () => (dispatch) => {
    return (
        dispatch({
            type: CLOSE
        })
    )
}
