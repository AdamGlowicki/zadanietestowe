import { FETCH_COMPANIES_SUCCESS, FETCH_COMPANIES_REQUEST, SORT, FETCH_INCOME_SUCCESS} from "../action";


const initialState = {
    data:[],
    incomes:[],
    isLoading: false,
    isOpen: true,
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_COMPANIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_COMPANIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: [...payload.data]
            };
        case SORT:
            if (payload.order) {
                return {
                    ...state,
                    data: [...state.data.sort((a, b) => a.id - b.id)]
                }
            }
            return {
                ...state,
                data: [...state.data.sort((a, b) => b.id - a.id)],
            }
        case FETCH_INCOME_SUCCESS:
            return {
                ...state,
                incomes: [...payload.incomes],
                isOpen: payload.isOpen
            }
        default:
            return state;
    }
};

export default rootReducer;
