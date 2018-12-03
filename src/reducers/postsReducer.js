import {
    ADD_POST,
    TOGGLE_PREVIEW_VISIBILITY,
    PREVIEW_INPUT_CHANGE,
    FILTER_CHANGE,
    FILTER_POSTS
} from '../actions/types'

const previewInitialState = {
    inputs: {
        title: "",
        email: "",
        text: ""
    },
    canShow: false
};

const initialState = {
    posts: {
        allPosts: [],
        filtredPosts: [],
        preview: { ...previewInitialState },
        filters: {
            search: ""
        }
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    allPosts: [
                        ...state.posts.allPosts,
                        {
                            ...action.payload
                        },
                    ],
                    preview: { ...previewInitialState }
                },
            }

        case TOGGLE_PREVIEW_VISIBILITY:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    preview: {
                        ...state.posts.preview,
                        canShow: !state.posts.preview.canShow
                    }
                }
            };
        case PREVIEW_INPUT_CHANGE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    preview: {
                        ...state.posts.preview,
                        inputs: {
                            ...state.posts.preview.inputs,
                            [action.payload.name]: action.payload.value
                        }
                    }
                }
            }
        default:
            return state;
        case FILTER_POSTS:
            for (let f in state.posts.filters) {
                switch (f) {
                    case "search":
                        let allPosts = [...state.posts.allPosts];
                        let filtredPosts;
                        if (state.posts.filters[f] === "") {
                            filtredPosts = allPosts;
                        } else {
                            filtredPosts = allPosts.filter(el => {
                                return el.title.indexOf(state.posts.filters[f]) >= 0;
                            });
                        }

                        return {
                            ...state,
                            posts: {
                                ...state.posts,
                                filtredPosts
                            }
                        }
                    default:
                        return { ...state }
                }
            }
            break;
        case FILTER_CHANGE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    filters: {
                        ...state.posts.filters,
                        [action.payload.filter_name]: action.payload.value
                    }
                }
            }
    }
}