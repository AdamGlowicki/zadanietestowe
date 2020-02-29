import {
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_REQUEST,
    SORT,
    FETCH_INCOME_SUCCESS,
    FETCH_INCOME_REQUEST,
} from "../action";


const initialState = {
    data:[],
    incomes:[],
    isLoading: false,
    isOpen: false,
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_COMPANIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
            case FETCH_INCOME_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_COMPANIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: [...payload.data],
            };
        case SORT:
            if (payload.order) {
                return {
                    ...state,
                    data: [...state.data.sort((a, b) => a.id - b.id)],
                }
            }
            return {
                ...state,
                data: [...state.data.sort((a, b) => b.id - a.id)],
            }
        case FETCH_INCOME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                incomes: [...payload.incomes],
                isOpen: true
            }
        default:
            return state;
    }
};

export default rootReducer;
