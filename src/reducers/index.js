import { FETCH_SUCCESS, FETCH_REQUEST, SORT} from "../action";


const initialState = {
    data:[],
    isLoading: false,
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                // data: [...payload.data]
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
                data: [...state.data.sort((a, b) => b.id - a.id)]
            }
        default:
            return state;
    }
};

export default rootReducer;
