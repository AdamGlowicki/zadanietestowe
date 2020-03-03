import {
    CLOSE,
    FETCH_COMPANIES_REQUEST,
    FETCH_COMPANIES_SUCCESS,
    FETCH_INCOME_REQUEST,
    FETCH_INCOME_SUCCESS, SORT_CITY, SORT_CONCERN,
    SORT_ID
} from "../action";

const initialState = {
    data: [],
    incomes: [],
    isLoading: false,
    isOpen: false,
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_COMPANIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_INCOME_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_COMPANIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: [...payload.data],
            }
        case SORT_ID:
            if (payload.order) {
                return {
                    ...state,
                    data: [...state.data.sort((a, b) => a.id - b.id)],
                }
            }
            return {
                ...state,
                data: [...state.data.sort((a, b) => b.id - a.id)],
            };
        case SORT_CONCERN:
            if (payload.order) {
                return {
                    ...state,
                    data: [...state.data.sort((a, b) => a.name.localeCompare(b.name))],
                }
            }
            return {
                ...state,
                data: [...state.data.sort((a, b) => b.name.localeCompare(a.name))],
            };
        case SORT_CITY:
            if (payload.order) {
                return {
                    ...state,
                    data: [...state.data.sort((a, b) => a.city.localeCompare(b.city))],
                }
            }
            return {
                ...state,
                data: [...state.data.sort((a, b) => b.city.localeCompare(a.city))],
            }
        case FETCH_INCOME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                incomes: [...payload.incomes],
                isOpen: true
            }
        case CLOSE:
            return {
                ...state,
                isOpen: false,
            }
        default:
            return state;
    }
};

export default rootReducer;
