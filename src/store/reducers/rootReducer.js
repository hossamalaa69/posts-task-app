import { LOAD_POSTS } from "../actions/postActions";

const initState = {
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case LOAD_POSTS:
            return {...state, posts: action.payload}

        default: 
            return state; 
    }
}

export default rootReducer;